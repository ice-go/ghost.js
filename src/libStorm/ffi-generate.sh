#!/usr/bin/env bash
npx ffi-generate -f ./src/StormLib.h -L /usr/lib/llvm-6.0/lib/ -l Storm
