if react router or react router dom give you ts errors do the following:
add `@ts-nocheck` to kill the warnings in its typedef(\*.d.ts) file. this will not hurt the build or anything to do with the project. the typescript compiler doesn't need these files to work properly and it will not hurt the type safety provided or the lsp suggestions
