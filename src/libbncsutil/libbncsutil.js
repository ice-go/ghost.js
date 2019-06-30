const FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

const voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
};

const fd_set = exports.fd_set = Struct({
  __fds_bits: ArrayType(ref.types.long, 16),
});
const fd_setPtr = exports.fd_setPtr = ref.refType(fd_set);
const __sigset_t = exports.__sigset_t = Struct({
  __val: ArrayType(ref.types.ulong, 16),
});
const __sigset_tPtr = exports.__sigset_tPtr = ref.refType(__sigset_t);
const int32_t = exports.int32_t = Struct({
  __int32_t: ref.types.int32,
});
const int32_tPtr = exports.int32_tPtr = ref.refType(int32_t);
const __compar_fn_t = exports.__compar_fn_t = FFI.Function(ref.types.int32, [
  voidPtr,
  voidPtr,
]);
const __compar_fn_tPtr = exports.__compar_fn_tPtr = ref.refType(__compar_fn_t);
const div_t = exports.div_t = Struct({
  quot: ref.types.int32,
  rem: ref.types.int32,
});
const div_tPtr = exports.div_tPtr = ref.refType(div_t);
const ldiv_t = exports.ldiv_t = Struct({
  quot: ref.types.long,
  rem: ref.types.long,
});
const ldiv_tPtr = exports.ldiv_tPtr = ref.refType(ldiv_t);
const lldiv_t = exports.lldiv_t = Struct({
  quot: ref.types.longlong,
  rem: ref.types.longlong,
});
const lldiv_tPtr = exports.lldiv_tPtr = ref.refType(lldiv_t);
const uint32_t = exports.uint32_t = Struct({
  __uint32_t: ref.types.uint32,
});
const uint32_tPtr = exports.uint32_tPtr = ref.refType(uint32_t);
const nls_t = exports.nls_t = voidPtr;
const nls_tPtr = exports.nls_tPtr = ref.refType(nls_t);

exports.libbncsutil = new FFI.Library('libbncsutil', {
  __ctype_get_mb_cur_max: [ref.types.int32, [
  ]],
  atof: [ref.types.double, [
    ref.types.CString,
  ]],
  atoi: [ref.types.int32, [
    ref.types.CString,
  ]],
  atol: [ref.types.long, [
    ref.types.CString,
  ]],
  atoll: [ref.types.longlong, [
    ref.types.CString,
  ]],
  strtod: [ref.types.double, [
    ref.types.CString,
    voidPtr,
  ]],
  strtof: [ref.types.float, [
    ref.types.CString,
    voidPtr,
  ]],
  strtol: [ref.types.long, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoul: [ref.types.ulong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoq: [ref.types.longlong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtouq: [ref.types.ulonglong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoll: [ref.types.longlong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  strtoull: [ref.types.ulonglong, [
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  l64a: [ref.types.CString, [
    ref.types.long,
  ]],
  a64l: [ref.types.long, [
    ref.types.CString,
  ]],
  // __bswap_16: [ref.types.ushort, [
  //   ref.types.ushort,
  // ]],
  // __bswap_32: [ref.types.uint32, [
  //   ref.types.uint32,
  // ]],
  // __bswap_64: [ref.types.ulong, [
  //   ref.types.ulong,
  // ]],
  // __uint16_identity: [ref.types.ushort, [
  //   ref.types.ushort,
  // ]],
  // __uint32_identity: [ref.types.uint32, [
  //   ref.types.uint32,
  // ]],
  // __uint64_identity: [ref.types.ulong, [
  //   ref.types.ulong,
  // ]],
  select: [ref.types.int32, [
    ref.types.int32,
    fd_setPtr,
    fd_setPtr,
    fd_setPtr,
    voidPtr,
  ]],
  pselect: [ref.types.int32, [
    ref.types.int32,
    fd_setPtr,
    fd_setPtr,
    fd_setPtr,
    voidPtr,
    __sigset_tPtr,
  ]],
  random: [ref.types.long, [
  ]],
  srandom: [ref.types.void, [
    ref.types.uint32,
  ]],
  initstate: [ref.types.CString, [
    ref.types.uint32,
    ref.types.CString,
    ref.types.int32,
  ]],
  setstate: [ref.types.CString, [
    ref.types.CString,
  ]],
  random_r: [ref.types.int32, [
    voidPtr,
    int32_tPtr,
  ]],
  srandom_r: [ref.types.int32, [
    ref.types.uint32,
    voidPtr,
  ]],
  initstate_r: [ref.types.int32, [
    ref.types.uint32,
    ref.types.CString,
    ref.types.int32,
    voidPtr,
  ]],
  setstate_r: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  rand: [ref.types.int32, [
  ]],
  srand: [ref.types.void, [
    ref.types.uint32,
  ]],
  rand_r: [ref.types.int32, [
    ref.refType(ref.types.uint32),
  ]],
  drand48: [ref.types.double, [
  ]],
  erand48: [ref.types.double, [
    ref.types.ushort,
  ]],
  lrand48: [ref.types.long, [
  ]],
  nrand48: [ref.types.long, [
    ref.types.ushort,
  ]],
  mrand48: [ref.types.long, [
  ]],
  jrand48: [ref.types.long, [
    ref.types.ushort,
  ]],
  srand48: [ref.types.void, [
    ref.types.long,
  ]],
  seed48: [ref.refType(ref.types.ushort), [
    ref.types.ushort,
  ]],
  lcong48: [ref.types.void, [
    ref.types.ushort,
  ]],
  drand48_r: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.double),
  ]],
  erand48_r: [ref.types.int32, [
    ref.types.ushort,
    voidPtr,
    ref.refType(ref.types.double),
  ]],
  lrand48_r: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.long),
  ]],
  nrand48_r: [ref.types.int32, [
    ref.types.ushort,
    voidPtr,
    ref.refType(ref.types.long),
  ]],
  mrand48_r: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.long),
  ]],
  jrand48_r: [ref.types.int32, [
    ref.types.ushort,
    voidPtr,
    ref.refType(ref.types.long),
  ]],
  srand48_r: [ref.types.int32, [
    ref.types.long,
    voidPtr,
  ]],
  seed48_r: [ref.types.int32, [
    ref.types.ushort,
    voidPtr,
  ]],
  lcong48_r: [ref.types.int32, [
    ref.types.ushort,
    voidPtr,
  ]],
  malloc: [voidPtr, [
    ref.types.int32,
  ]],
  calloc: [voidPtr, [
    ref.types.int32,
    ref.types.int32,
  ]],
  realloc: [voidPtr, [
    voidPtr,
    ref.types.int32,
  ]],
  free: [ref.types.void, [
    voidPtr,
  ]],
  // alloca: [voidPtr, [
  //   ref.types.int32,
  // ]],
  valloc: [voidPtr, [
    ref.types.int32,
  ]],
  posix_memalign: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  aligned_alloc: [voidPtr, [
    ref.types.int32,
    ref.types.int32,
  ]],
  abort: [ref.types.void, [
  ]],
  // atexit: [ref.types.int32, [
  //   voidPtr,
  // ]],
  // at_quick_exit: [ref.types.int32, [
  //   voidPtr,
  // ]],
  on_exit: [ref.types.int32, [
    voidPtr,
    voidPtr,
  ]],
  exit: [ref.types.void, [
    ref.types.int32,
  ]],
  quick_exit: [ref.types.void, [
    ref.types.int32,
  ]],
  _Exit: [ref.types.void, [
    ref.types.int32,
  ]],
  getenv: [ref.types.CString, [
    ref.types.CString,
  ]],
  putenv: [ref.types.int32, [
    ref.types.CString,
  ]],
  setenv: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  unsetenv: [ref.types.int32, [
    ref.types.CString,
  ]],
  clearenv: [ref.types.int32, [
  ]],
  mktemp: [ref.types.CString, [
    ref.types.CString,
  ]],
  mkstemp: [ref.types.int32, [
    ref.types.CString,
  ]],
  mkstemps: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  mkdtemp: [ref.types.CString, [
    ref.types.CString,
  ]],
  system: [ref.types.int32, [
    ref.types.CString,
  ]],
  realpath: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  bsearch: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    __compar_fn_t,
  ]],
  qsort: [ref.types.void, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    __compar_fn_t,
  ]],
  abs: [ref.types.int32, [
    ref.types.int32,
  ]],
  labs: [ref.types.long, [
    ref.types.long,
  ]],
  llabs: [ref.types.longlong, [
    ref.types.longlong,
  ]],
  div: [div_t, [
    ref.types.int32,
    ref.types.int32,
  ]],
  ldiv: [ldiv_t, [
    ref.types.long,
    ref.types.long,
  ]],
  lldiv: [lldiv_t, [
    ref.types.longlong,
    ref.types.longlong,
  ]],
  ecvt: [ref.types.CString, [
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  fcvt: [ref.types.CString, [
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
  ]],
  gcvt: [ref.types.CString, [
    ref.types.double,
    ref.types.int32,
    ref.types.CString,
  ]],
  ecvt_r: [ref.types.int32, [
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
    ref.types.CString,
    ref.types.int32,
  ]],
  fcvt_r: [ref.types.int32, [
    ref.types.double,
    ref.types.int32,
    ref.refType(ref.types.int32),
    ref.refType(ref.types.int32),
    ref.types.CString,
    ref.types.int32,
  ]],
  mblen: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  mbtowc: [ref.types.int32, [
    ref.refType(ref.types.int32),
    ref.types.CString,
    ref.types.int32,
  ]],
  wctomb: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  mbstowcs: [ref.types.int32, [
    ref.refType(ref.types.int32),
    ref.types.CString,
    ref.types.int32,
  ]],
  wcstombs: [ref.types.int32, [
    ref.types.CString,
    ref.refType(ref.types.int32),
    ref.types.int32,
  ]],
  rpmatch: [ref.types.int32, [
    ref.types.CString,
  ]],
  getsubopt: [ref.types.int32, [
    voidPtr,
    voidPtr,
    voidPtr,
  ]],
  extractMPQNumber: [ref.types.int32, [
    ref.types.CString,
  ]],
  checkRevisionFlat: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
    ref.refType(ref.types.ulong),
  ]],
  getExeInfo: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
    uint32_tPtr,
    ref.types.int32,
  ]],
  get_mpq_seed: [ref.types.long, [
    ref.types.int32,
  ]],
  set_mpq_seed: [ref.types.long, [
    ref.types.int32,
    ref.types.long,
  ]],
  calcHashBuf: [ref.types.void, [
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
  ]],
  // bsha1_hash: [ref.types.void, [
  //   ref.types.CString,
  //   ref.types.uint32,
  //   ref.types.CString,
  // ]],
  doubleHashPassword: [ref.types.void, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.CString,
  ]],
  hashPassword: [ref.types.void, [
    ref.types.CString,
    ref.types.CString,
  ]],
  kd_quick: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
    uint32_tPtr,
    uint32_tPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  kd_init: [ref.types.int32, [
  ]],
  kd_create: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  kd_free: [ref.types.int32, [
    ref.types.int32,
  ]],
  kd_val2Length: [ref.types.int32, [
    ref.types.int32,
  ]],
  kd_product: [ref.types.int32, [
    ref.types.int32,
  ]],
  kd_val1: [ref.types.int32, [
    ref.types.int32,
  ]],
  kd_val2: [ref.types.int32, [
    ref.types.int32,
  ]],
  kd_longVal2: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
  ]],
  kd_calculateHash: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  kd_getHash: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
  ]],
  kd_isValid: [ref.types.int32, [
    ref.types.int32,
  ]],
  nls_init: [nls_t, [
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_init_l: [nls_tPtr, [
    ref.types.CString,
    ref.types.ulong,
    ref.types.CString,
    ref.types.ulong,
  ]],
  nls_free: [ref.types.void, [
    nls_tPtr,
  ]],
  nls_reinit: [nls_tPtr, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_reinit_l: [nls_tPtr, [
    nls_tPtr,
    ref.types.CString,
    ref.types.ulong,
    ref.types.CString,
    ref.types.ulong,
  ]],
  nls_account_create: [ref.types.ulong, [
    nls_tPtr,
    ref.types.CString,
    ref.types.ulong,
  ]],
  nls_account_logon: [ref.types.ulong, [
    nls_tPtr,
    ref.types.CString,
    ref.types.ulong,
  ]],
  nls_account_change_proof: [nls_tPtr, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_get_S: [ref.types.void, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_get_v: [ref.types.void, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_get_A: [ref.types.void, [
    nls_tPtr,
    ref.types.CString,
  ]],
  nls_get_K: [ref.types.void, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_get_M1: [ref.types.void, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_check_M2: [ref.types.int32, [
    nls_tPtr,
    ref.types.CString,
    ref.types.CString,
    ref.types.CString,
  ]],
  nls_check_signature: [ref.types.int32, [
    ref.types.uint32,
    ref.types.CString,
  ]],
  bncsutil_getVersion: [ref.types.ulong, [
  ]],
  bncsutil_getVersionString: [ref.types.int32, [
    ref.types.CString,
  ]],
});

