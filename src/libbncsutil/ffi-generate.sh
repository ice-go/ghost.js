#!/usr/bin/env bash
npx ffi-generate -f ./src/bncsutil.h --libclang /usr/lib/llvm-6.0/lib/ -l libbncsutil
