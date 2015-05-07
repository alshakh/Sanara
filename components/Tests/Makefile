OutputName=testsLib
SourceFiles=src/simplePaper.ts

BaseDir=../..
OutputDir=$(BaseDir)/js
Out=$(OutputDir)/$(OutputName).js

all: $(Out)

$(Out): lib.ts $(SourceFiles)
	tsc --declaration --sourceMap --out $@ lib.ts
	cp -f $(OutputDir)/$(OutputName).d.ts ../declareFiles/

clean:
	rm $(OUT)
