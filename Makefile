

all: coreLib stdLib

#editorLib testsLib


coreLib:
	(cd components/Core; make all)

stdLib:
	(cd components/Std; make all)

editorLib:
	(cd components/Editor; make all)

testsLib:
	(cd components/Tests; make all)
