 
#!/usr/bin/python

import sys
import os
import os.path
sys.path.append("compiler")
import mergejs
import optparse

configDir = "configs/"
outputDir = "../../../../../WebContent/media/cityways/"
buildTool = "python build.py"

# Default params
cmd  = "release" 
compressor = "closure"
buildType  = ""    
conf_type = "" 
configs = ["MainPage", "RoutesPage"]
# Read args

if len(sys.argv) > 1:
    cmd = sys.argv[1]
if len(sys.argv) > 2:
    buildType = sys.argv[2]

if cmd== "jsdoc":
	os.system("java -jar jsdoc-toolkit/jsrun.jar jsdoc-toolkit/app/run.js --private  -t=jsdoc-toolkit/templates/Codeview -r=4  ../src/")
	sys.exit(0)
if cmd == "debug":
	compressor = "none"
	conf_type = "_debug"
# Run
commandPattern = "%s %s %s -c %s"

if buildType == "":
	for conf in configs:
		command = commandPattern % (buildTool,configDir + conf+ conf_type,outputDir + conf + ".js", compressor)
		print command
		os.system(command)
	sys.exit(0)	
	
command = commandPattern % (buildTool,configDir + buildType + conf_type,outputDir + buildType + ".js", compressor)
print command
os.system(command)


#java -jar jsdoc-toolkit/jsrun.jar jsdoc-toolkit/app/run.js  -t=jsdoc-toolkit/templates/jsdoc -r=4  ../src/ 