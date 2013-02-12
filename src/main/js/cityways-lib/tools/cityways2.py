#!/usr/bin/python
import sys
import os
import os.path
import optparse
import json
sys.path.append("build")
import js_minify

configDir = "configs/"
outputDir = "../../../../../WebContent/media/cityways/"
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


def build(config_file, output_dir, options):
    cfg = read_configs(config_file)
    print cfg
    print cfg['modules']
    print "Hello\n"


opt = optparse.OptionParser(usage="%s [options] [config_file] [output_dir]\n  Default config_file is 'full.json'")
opt.add_option("-c", "--compressor", dest="compressor", help="compression method: 'none'(default),'closure'", default="none")
(options, args) = opt.parse_args()
if not len(args):
    build(options=options)
elif len(args) == 1:
    build(args[0], options=options)
elif len(args) == 2:
    build(args[0], args[1], options=options)
else:
    print "Wrong number of arguments"
