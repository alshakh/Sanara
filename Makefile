

all: coreLib symbolLib editorLib testsLib


coreLib:
	(cd components/Core; make all)

symbolLib:
	(cd components/Symbol; make all)

editorLib:
	(cd components/Editor; make all)

testsLib:
	(cd components/Tests; make all)
