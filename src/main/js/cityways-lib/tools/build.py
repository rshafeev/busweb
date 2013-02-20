#!/usr/bin/python
import sys
import os
import os.path
import optparse
import json
sys.path.append("build")
import js_minify

sourceDir = "../src/"
output_dir_default = "../bin/"
output_dir_default = "../../../../../WebContent/media/cityways/"
config_file_default = "build/configs/page_modules_debug.json"
buildTool = "python build.py"


def read_configs(config_file):
    if os.path.exists(config_file) == False:
        config_file = "build/configs/cways-lib.json"
    # Open config file
    f = open(config_file, 'r')
    data = f.read()
    data = js_minify.json_minify(data)
    jsonObj = json.loads(data)
    f.close()
    return jsonObj


def compile_closure(cfg, output_dir, options):
    closure_compiler_cfg = " "
    closure_compiler_cfg += "--externs build/externs/Externs.js "
    closure_compiler_cfg += "--externs build/externs/jquery-1.8.js "
    closure_compiler_cfg += "--externs build/externs/underscore.js "
    closure_compiler_cfg += "--jscomp_warning checkVars "
    closure_compiler_cfg += "--jscomp_error checkRegExp "
    closure_compiler_cfg += "--jscomp_error undefinedVars "
    # closure_compiler_cfg += "--use_types_for_optimization  "
    # closure_compiler_cfg += "--compilation_level  ADVANCED_OPTIMIZATIONS "
    closure_compiler_cfg += "--module_output_path_prefix " + output_dir + " "
    closure_compiler_sfiles = ""
    closure_compiler_modules = ""

    for module in cfg["modules"]:
        for source_f in module["code"]:
            closure_compiler_sfiles = closure_compiler_sfiles + " --js " + sourceDir + source_f
        closure_compiler_modules = closure_compiler_modules + " --module " + module["name"] + ":" + str(len(module["code"]))
        if len(module["core_module"]) > 0:
            closure_compiler_modules = closure_compiler_modules + ":" + module["core_module"]
    closure_compiler_cmd = "java -jar build/closure-compiler.jar " + closure_compiler_sfiles + closure_compiler_modules + closure_compiler_cfg
    os.system(closure_compiler_cmd)


def compile_simple(cfg, output_dir, options):
    for module in cfg["modules"]:
        module_source_code = ""
        for source_f in module["code"]:
            f = open(sourceDir + source_f, 'r')
            module_source_code += f.read() + "\n"
            f.close()
        print output_dir + module["out"]
        f = open(output_dir + module["out"], "wa")
        f.write(module_source_code)
        f.close()


def build_jsdoc(options):
    options = options[1:(len(options) - 1)]
    cmd = "cd jsdoc && ./jsdoc " + options + " " + "../" + sourceDir
    print cmd
    os.system(cmd)


def build(config_file, output_dir, options):
    cfg = read_configs(config_file)
    if options.build and options.build == "closure":
        compile_closure(cfg, output_dir, options)
    elif options.build and options.build == "simple":
        compile_simple(cfg, output_dir, options)

    if options.jsdoc and options.jsdoc == "true":
        build_jsdoc(options.jsdoc_opts)
    print "finish."



opt = optparse.OptionParser(usage=" [config_file] [output_dir] [options]\n  Default config_file is " + config_file_default + 
    "\n  Default output dir is " + output_dir_default)

opt.add_option("-c", "--build", dest="build", help="build method: 'none','simple'(default), closure'", default="simple")
opt.add_option("", "--jsdoc", dest="jsdoc", help="build jsDoc: false(default), true", default="false")
opt.add_option("", "--jsdoc_opts", dest="jsdoc_opts", help="jsDoc options. Default : ''", default="'-r -p -d ../../bin/jsdoc -c conf.json'")

(options, args) = opt.parse_args()
if not len(args):
    build(config_file_default, output_dir_default, options=options)
elif len(args) == 1:
    build(args[0], output_dir_default, options=options)
elif len(args) == 2:
    build(args[0], args[1], options=options)
else:
    print "Wrong number of arguments"
