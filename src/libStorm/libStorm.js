const FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

const voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  '_SFileInfoClass': {
      SFileMpqFileName: 0,
      SFileMpqStreamBitmap: 1,
      SFileMpqUserDataOffset: 2,
      SFileMpqUserDataHeader: 3,
      SFileMpqUserData: 4,
      SFileMpqHeaderOffset: 5,
      SFileMpqHeaderSize: 6,
      SFileMpqHeader: 7,
      SFileMpqHetTableOffset: 8,
      SFileMpqHetTableSize: 9,
      SFileMpqHetHeader: 10,
      SFileMpqHetTable: 11,
      SFileMpqBetTableOffset: 12,
      SFileMpqBetTableSize: 13,
      SFileMpqBetHeader: 14,
      SFileMpqBetTable: 15,
      SFileMpqHashTableOffset: 16,
      SFileMpqHashTableSize64: 17,
      SFileMpqHashTableSize: 18,
      SFileMpqHashTable: 19,
      SFileMpqBlockTableOffset: 20,
      SFileMpqBlockTableSize64: 21,
      SFileMpqBlockTableSize: 22,
      SFileMpqBlockTable: 23,
      SFileMpqHiBlockTableOffset: 24,
      SFileMpqHiBlockTableSize64: 25,
      SFileMpqHiBlockTable: 26,
      SFileMpqSignatures: 27,
      SFileMpqStrongSignatureOffset: 28,
      SFileMpqStrongSignatureSize: 29,
      SFileMpqStrongSignature: 30,
      SFileMpqArchiveSize64: 31,
      SFileMpqArchiveSize: 32,
      SFileMpqMaxFileCount: 33,
      SFileMpqFileTableSize: 34,
      SFileMpqSectorSize: 35,
      SFileMpqNumberOfFiles: 36,
      SFileMpqRawChunkSize: 37,
      SFileMpqStreamFlags: 38,
      SFileMpqFlags: 39,
      SFileInfoPatchChain: 40,
      SFileInfoFileEntry: 41,
      SFileInfoHashEntry: 42,
      SFileInfoHashIndex: 43,
      SFileInfoNameHash1: 44,
      SFileInfoNameHash2: 45,
      SFileInfoNameHash3: 46,
      SFileInfoLocale: 47,
      SFileInfoFileIndex: 48,
      SFileInfoByteOffset: 49,
      SFileInfoFileTime: 50,
      SFileInfoFileSize: 51,
      SFileInfoCompressedSize: 52,
      SFileInfoFlags: 53,
      SFileInfoEncryptionKey: 54,
      SFileInfoEncryptionKeyRaw: 55,
      SFileInfoCRC32: 56,
      '0': 'SFileMpqFileName',
      '1': 'SFileMpqStreamBitmap',
      '2': 'SFileMpqUserDataOffset',
      '3': 'SFileMpqUserDataHeader',
      '4': 'SFileMpqUserData',
      '5': 'SFileMpqHeaderOffset',
      '6': 'SFileMpqHeaderSize',
      '7': 'SFileMpqHeader',
      '8': 'SFileMpqHetTableOffset',
      '9': 'SFileMpqHetTableSize',
      '10': 'SFileMpqHetHeader',
      '11': 'SFileMpqHetTable',
      '12': 'SFileMpqBetTableOffset',
      '13': 'SFileMpqBetTableSize',
      '14': 'SFileMpqBetHeader',
      '15': 'SFileMpqBetTable',
      '16': 'SFileMpqHashTableOffset',
      '17': 'SFileMpqHashTableSize64',
      '18': 'SFileMpqHashTableSize',
      '19': 'SFileMpqHashTable',
      '20': 'SFileMpqBlockTableOffset',
      '21': 'SFileMpqBlockTableSize64',
      '22': 'SFileMpqBlockTableSize',
      '23': 'SFileMpqBlockTable',
      '24': 'SFileMpqHiBlockTableOffset',
      '25': 'SFileMpqHiBlockTableSize64',
      '26': 'SFileMpqHiBlockTable',
      '27': 'SFileMpqSignatures',
      '28': 'SFileMpqStrongSignatureOffset',
      '29': 'SFileMpqStrongSignatureSize',
      '30': 'SFileMpqStrongSignature',
      '31': 'SFileMpqArchiveSize64',
      '32': 'SFileMpqArchiveSize',
      '33': 'SFileMpqMaxFileCount',
      '34': 'SFileMpqFileTableSize',
      '35': 'SFileMpqSectorSize',
      '36': 'SFileMpqNumberOfFiles',
      '37': 'SFileMpqRawChunkSize',
      '38': 'SFileMpqStreamFlags',
      '39': 'SFileMpqFlags',
      '40': 'SFileInfoPatchChain',
      '41': 'SFileInfoFileEntry',
      '42': 'SFileInfoHashEntry',
      '43': 'SFileInfoHashIndex',
      '44': 'SFileInfoNameHash1',
      '45': 'SFileInfoNameHash2',
      '46': 'SFileInfoNameHash3',
      '47': 'SFileInfoLocale',
      '48': 'SFileInfoFileIndex',
      '49': 'SFileInfoByteOffset',
      '50': 'SFileInfoFileTime',
      '51': 'SFileInfoFileSize',
      '52': 'SFileInfoCompressedSize',
      '53': 'SFileInfoFlags',
      '54': 'SFileInfoEncryptionKey',
      '55': 'SFileInfoEncryptionKeyRaw',
      '56': 'SFileInfoCRC32',
  },
};

const fd_set = exports.fd_set = Struct({
  __fds_bits: ArrayType(ref.types.long, 16),
});
const fd_setPtr = exports.fd_setPtr = ref.refType(fd_set);
const __sigset_t = exports.__sigset_t = Struct({
  __val: ArrayType(ref.types.ulong, 16),
});
const __sigset_tPtr = exports.__sigset_tPtr = ref.refType(__sigset_t);
const timespec = exports.timespec = ArrayType(timespec, 2);
const timespecPtr = exports.timespecPtr = ref.refType(timespec);
const __dev_t = exports.__dev_t = voidPtr;
const __dev_tPtr = exports.__dev_tPtr = ref.refType(__dev_t);
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
const _IO_lock_t = exports._IO_lock_t = voidPtr;
const _IO_lock_tPtr = exports._IO_lock_tPtr = ref.refType(_IO_lock_t);
const _IO_FILE = exports._IO_FILE = Struct({
  _flags: ref.types.int32,
  _IO_read_ptr: ref.types.CString,
  _IO_read_end: ref.types.CString,
  _IO_read_base: ref.types.CString,
  _IO_write_base: ref.types.CString,
  _IO_write_ptr: ref.types.CString,
  _IO_write_end: ref.types.CString,
  _IO_buf_base: ref.types.CString,
  _IO_buf_end: ref.types.CString,
  _IO_save_base: ref.types.CString,
  _IO_backup_base: ref.types.CString,
  _IO_save_end: ref.types.CString,
  _markers: voidPtr,
  _chain: voidPtr,
  _fileno: ref.types.int32,
  _flags2: ref.types.int32,
  _old_offset: ref.types.long,
  _cur_column: ref.types.ushort,
  _vtable_offset: ref.types.char,
  _shortbuf: ArrayType(ref.types.char, 1),
  _lock: _IO_lock_t,
  _offset: ref.types.long,
  _codecvt: voidPtr,
  _wide_data: voidPtr,
  _freeres_list: voidPtr,
  _freeres_buf: voidPtr,
  __pad5: ref.types.int32,
  _mode: ref.types.int32,
  _unused2: ref.types.char,
});
const _IO_FILEPtr = exports._IO_FILEPtr = ref.refType(_IO_FILE);
const FILE = exports.FILE = Struct({
  _IO_FILE: _IO_FILE,
});
const FILEPtr = exports.FILEPtr = ref.refType(FILE);
const fpos_t = exports.fpos_t = voidPtr;
const fpos_tPtr = exports.fpos_tPtr = ref.refType(fpos_t);
const __locale_struct = exports.__locale_struct = Struct({
  __locales: ArrayType(voidPtr, 13),
  __ctype_b: ref.refType(ref.types.ushort),
  __ctype_tolower: ref.refType(ref.types.int32),
  __ctype_toupper: ref.refType(ref.types.int32),
  __names: ArrayType(ref.types.CString, 13),
});
const __locale_structPtr = exports.__locale_structPtr = ref.refType(__locale_struct);
const TBitArray = exports.TBitArray = Struct({
  NumberOfBytes: ref.types.uint32,
  NumberOfBits: ref.types.uint32,
  Elements: ArrayType(ref.types.uchar, 1),
});
const TBitArrayPtr = exports.TBitArrayPtr = ref.refType(TBitArray);
const TFileStream = exports.TFileStream = voidPtr;
const TFileStreamPtr = exports.TFileStreamPtr = ref.refType(TFileStream);
const TCHAR = exports.TCHAR = voidPtr;
const TCHARPtr = exports.TCHARPtr = ref.refType(TCHAR);
const DWORD = exports.DWORD = voidPtr;
const DWORDPtr = exports.DWORDPtr = ref.refType(DWORD);
const SFILE_DOWNLOAD_CALLBACK = exports.SFILE_DOWNLOAD_CALLBACK = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.ulonglong,
  ref.types.uint32,
]);
const SFILE_DOWNLOAD_CALLBACKPtr = exports.SFILE_DOWNLOAD_CALLBACKPtr = ref.refType(SFILE_DOWNLOAD_CALLBACK);
const LPDWORD = exports.LPDWORD = voidPtr;
const LPDWORDPtr = exports.LPDWORDPtr = ref.refType(LPDWORD);
const ULONGLONG = exports.ULONGLONG = voidPtr;
const ULONGLONGPtr = exports.ULONGLONGPtr = ref.refType(ULONGLONG);
const HANDLE = exports.HANDLE = voidPtr;
const HANDLEPtr = exports.HANDLEPtr = ref.refType(HANDLE);
const _SFILE_CREATE_MPQ = exports._SFILE_CREATE_MPQ = Struct({
  cbSize: ref.types.uint32,
  dwMpqVersion: ref.types.uint32,
  pvUserData: voidPtr,
  cbUserData: ref.types.uint32,
  dwStreamFlags: ref.types.uint32,
  dwFileFlags1: ref.types.uint32,
  dwFileFlags2: ref.types.uint32,
  dwFileFlags3: ref.types.uint32,
  dwAttrFlags: ref.types.uint32,
  dwSectorSize: ref.types.uint32,
  dwRawChunkSize: ref.types.uint32,
  dwMaxFileCount: ref.types.uint32,
});
const _SFILE_CREATE_MPQPtr = exports._SFILE_CREATE_MPQPtr = ref.refType(_SFILE_CREATE_MPQ);
const SFILE_COMPACT_CALLBACK = exports.SFILE_COMPACT_CALLBACK = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.uint32,
  ref.types.ulonglong,
  ref.types.ulonglong,
]);
const SFILE_COMPACT_CALLBACKPtr = exports.SFILE_COMPACT_CALLBACKPtr = ref.refType(SFILE_COMPACT_CALLBACK);
const LONG = exports.LONG = voidPtr;
const LONGPtr = exports.LONGPtr = ref.refType(LONG);
const LPOVERLAPPED = exports.LPOVERLAPPED = voidPtr;
const LPOVERLAPPEDPtr = exports.LPOVERLAPPEDPtr = ref.refType(LPOVERLAPPED);
const SFILE_FIND_DATA = exports.SFILE_FIND_DATA = Struct({
  cFileName: ArrayType(ref.types.char, 1024),
  szPlainName: ref.types.CString,
  dwHashIndex: ref.types.uint32,
  dwBlockIndex: ref.types.uint32,
  dwFileSize: ref.types.uint32,
  dwFileFlags: ref.types.uint32,
  dwCompSize: ref.types.uint32,
  dwFileTimeLo: ref.types.uint32,
  dwFileTimeHi: ref.types.uint32,
  lcLocale: ref.types.uint32,
});
const SFILE_FIND_DATAPtr = exports.SFILE_FIND_DATAPtr = ref.refType(SFILE_FIND_DATA);
const LCID = exports.LCID = voidPtr;
const LCIDPtr = exports.LCIDPtr = ref.refType(LCID);
const SFILE_ADDFILE_CALLBACK = exports.SFILE_ADDFILE_CALLBACK = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.uint32,
  ref.types.uint32,
  ref.types.char,
]);
const SFILE_ADDFILE_CALLBACKPtr = exports.SFILE_ADDFILE_CALLBACKPtr = ref.refType(SFILE_ADDFILE_CALLBACK);

exports.Storm = new FFI.Library('Storm', {
  __bswap_16: [ref.types.ushort, [
    ref.types.ushort,
  ]],
  __bswap_32: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  __bswap_64: [ref.types.ulong, [
    ref.types.ulong,
  ]],
  __uint16_identity: [ref.types.ushort, [
    ref.types.ushort,
  ]],
  __uint32_identity: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  __uint64_identity: [ref.types.ulong, [
    ref.types.ulong,
  ]],
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
  stat: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  fstat: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
  ]],
  fstatat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  lstat: [ref.types.int32, [
    ref.types.CString,
    voidPtr,
  ]],
  chmod: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  lchmod: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  fchmod: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
  ]],
  fchmodat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    ref.types.int32,
  ]],
  umask: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  mkdir: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  mkdirat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
  ]],
  mknod: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.ulong,
  ]],
  mknodat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    ref.types.ulong,
  ]],
  mkfifo: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  mkfifoat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
  ]],
  utimensat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    timespec,
    ref.types.int32,
  ]],
  futimens: [ref.types.int32, [
    ref.types.int32,
    timespec,
  ]],
  __fxstat: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    voidPtr,
  ]],
  __xstat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    voidPtr,
  ]],
  __lxstat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    voidPtr,
  ]],
  __fxstatat: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.CString,
    voidPtr,
    ref.types.int32,
  ]],
  __xmknod: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    __dev_t,
  ]],
  __xmknodat: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    __dev_tPtr,
  ]],
  mmap: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    ref.types.long,
  ]],
  munmap: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
  ]],
  mprotect: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  msync: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  madvise: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  posix_madvise: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  mlock: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
  ]],
  munlock: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
  ]],
  mlockall: [ref.types.int32, [
    ref.types.int32,
  ]],
  munlockall: [ref.types.int32, [
  ]],
  mincore: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.refType(ref.types.uchar),
  ]],
  shm_open: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.uint32,
  ]],
  shm_unlink: [ref.types.int32, [
    ref.types.CString,
  ]],
  fcntl: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  open: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  openat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  creat: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
  ]],
  lockf: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.long,
  ]],
  posix_fadvise: [ref.types.int32, [
    ref.types.int32,
    ref.types.long,
    ref.types.long,
    ref.types.int32,
  ]],
  posix_fallocate: [ref.types.int32, [
    ref.types.int32,
    ref.types.long,
    ref.types.long,
  ]],
  access: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  faccessat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
    ref.types.int32,
  ]],
  lseek: [ref.types.long, [
    ref.types.int32,
    ref.types.long,
    ref.types.int32,
  ]],
  close: [ref.types.int32, [
    ref.types.int32,
  ]],
  read: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
  ]],
  write: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
  ]],
  pread: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
    ref.types.long,
  ]],
  pwrite: [ref.types.long, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
    ref.types.long,
  ]],
  pipe: [ref.types.int32, [
    ref.types.int32,
  ]],
  alarm: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  sleep: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  ualarm: [ref.types.uint32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  usleep: [ref.types.int32, [
    ref.types.uint32,
  ]],
  pause: [ref.types.int32, [
  ]],
  chown: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  fchown: [ref.types.int32, [
    ref.types.int32,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  lchown: [ref.types.int32, [
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  fchownat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.int32,
  ]],
  chdir: [ref.types.int32, [
    ref.types.CString,
  ]],
  fchdir: [ref.types.int32, [
    ref.types.int32,
  ]],
  getcwd: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  getwd: [ref.types.CString, [
    ref.types.CString,
  ]],
  dup: [ref.types.int32, [
    ref.types.int32,
  ]],
  dup2: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  execle: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  execl: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  execlp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  nice: [ref.types.int32, [
    ref.types.int32,
  ]],
  _exit: [ref.types.void, [
    ref.types.int32,
  ]],
  pathconf: [ref.types.long, [
    ref.types.CString,
    ref.types.int32,
  ]],
  fpathconf: [ref.types.long, [
    ref.types.int32,
    ref.types.int32,
  ]],
  sysconf: [ref.types.long, [
    ref.types.int32,
  ]],
  confstr: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  getpid: [ref.types.int32, [
  ]],
  getppid: [ref.types.int32, [
  ]],
  getpgrp: [ref.types.int32, [
  ]],
  __getpgid: [ref.types.int32, [
    ref.types.int32,
  ]],
  getpgid: [ref.types.int32, [
    ref.types.int32,
  ]],
  setpgid: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  setpgrp: [ref.types.int32, [
  ]],
  setsid: [ref.types.int32, [
  ]],
  getsid: [ref.types.int32, [
    ref.types.int32,
  ]],
  getuid: [ref.types.uint32, [
  ]],
  geteuid: [ref.types.uint32, [
  ]],
  getgid: [ref.types.uint32, [
  ]],
  getegid: [ref.types.uint32, [
  ]],
  setuid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  setreuid: [ref.types.int32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  seteuid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  setgid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  setregid: [ref.types.int32, [
    ref.types.uint32,
    ref.types.uint32,
  ]],
  setegid: [ref.types.int32, [
    ref.types.uint32,
  ]],
  fork: [ref.types.int32, [
  ]],
  vfork: [ref.types.int32, [
  ]],
  ttyname: [ref.types.CString, [
    ref.types.int32,
  ]],
  ttyname_r: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  isatty: [ref.types.int32, [
    ref.types.int32,
  ]],
  ttyslot: [ref.types.int32, [
  ]],
  link: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  linkat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  symlink: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  readlink: [ref.types.long, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  symlinkat: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
  ]],
  readlinkat: [ref.types.long, [
    ref.types.int32,
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  unlink: [ref.types.int32, [
    ref.types.CString,
  ]],
  unlinkat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  rmdir: [ref.types.int32, [
    ref.types.CString,
  ]],
  tcgetpgrp: [ref.types.int32, [
    ref.types.int32,
  ]],
  tcsetpgrp: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  getlogin: [ref.types.CString, [
  ]],
  getlogin_r: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  setlogin: [ref.types.int32, [
    ref.types.CString,
  ]],
  getopt: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.CString,
  ]],
  gethostname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  sethostname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  sethostid: [ref.types.int32, [
    ref.types.long,
  ]],
  getdomainname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  setdomainname: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  vhangup: [ref.types.int32, [
  ]],
  revoke: [ref.types.int32, [
    ref.types.CString,
  ]],
  profil: [ref.types.int32, [
    ref.refType(ref.types.ushort),
    ref.types.int32,
    ref.types.int32,
    ref.types.uint32,
  ]],
  acct: [ref.types.int32, [
    ref.types.CString,
  ]],
  getusershell: [ref.types.CString, [
  ]],
  endusershell: [ref.types.void, [
  ]],
  setusershell: [ref.types.void, [
  ]],
  daemon: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  chroot: [ref.types.int32, [
    ref.types.CString,
  ]],
  getpass: [ref.types.CString, [
    ref.types.CString,
  ]],
  fsync: [ref.types.int32, [
    ref.types.int32,
  ]],
  gethostid: [ref.types.long, [
  ]],
  sync: [ref.types.void, [
  ]],
  getpagesize: [ref.types.int32, [
  ]],
  getdtablesize: [ref.types.int32, [
  ]],
  truncate: [ref.types.int32, [
    ref.types.CString,
    ref.types.long,
  ]],
  ftruncate: [ref.types.int32, [
    ref.types.int32,
    ref.types.long,
  ]],
  brk: [ref.types.int32, [
    voidPtr,
  ]],
  sbrk: [voidPtr, [
    ref.types.long,
  ]],
  syscall: [ref.types.long, [
    ref.types.long,
  ]],
  fdatasync: [ref.types.int32, [
    ref.types.int32,
  ]],
  crypt: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  getentropy: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
  ]],
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
  alloca: [voidPtr, [
    ref.types.int32,
  ]],
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
  atexit: [ref.types.int32, [
    voidPtr,
  ]],
  at_quick_exit: [ref.types.int32, [
    voidPtr,
  ]],
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
  remove: [ref.types.int32, [
    ref.types.CString,
  ]],
  rename: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  renameat: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
  ]],
  tmpfile: [FILEPtr, [
  ]],
  tmpnam: [ref.types.CString, [
    ref.types.CString,
  ]],
  tmpnam_r: [ref.types.CString, [
    ref.types.CString,
  ]],
  tempnam: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  fclose: [ref.types.int32, [
    FILEPtr,
  ]],
  fflush: [ref.types.int32, [
    FILEPtr,
  ]],
  fflush_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  fopen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
  ]],
  freopen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
    FILEPtr,
  ]],
  fdopen: [FILEPtr, [
    ref.types.int32,
    ref.types.CString,
  ]],
  fmemopen: [FILEPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.CString,
  ]],
  open_memstream: [FILEPtr, [
    voidPtr,
    ref.refType(ref.types.int32),
  ]],
  setbuf: [ref.types.void, [
    FILEPtr,
    ref.types.CString,
  ]],
  setvbuf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
    ref.types.int32,
  ]],
  setbuffer: [ref.types.void, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  setlinebuf: [ref.types.void, [
    FILEPtr,
  ]],
  fprintf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
  ]],
  printf: [ref.types.int32, [
    ref.types.CString,
  ]],
  sprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  vfprintf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  vprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  vsprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  snprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
  ]],
  vsnprintf: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  vdprintf: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  dprintf: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
  ]],
  fscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
  ]],
  scanf: [ref.types.int32, [
    ref.types.CString,
  ]],
  sscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  fscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
  ]],
  scanf: [ref.types.int32, [
    ref.types.CString,
  ]],
  sscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  vfscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  vscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  vsscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  vfscanf: [ref.types.int32, [
    FILEPtr,
    ref.types.CString,
    ref.types.int32,
  ]],
  vscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  vsscanf: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  fgetc: [ref.types.int32, [
    FILEPtr,
  ]],
  getc: [ref.types.int32, [
    FILEPtr,
  ]],
  getchar: [ref.types.int32, [
  ]],
  getc_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  getchar_unlocked: [ref.types.int32, [
  ]],
  fgetc_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  fputc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  putc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  putchar: [ref.types.int32, [
    ref.types.int32,
  ]],
  fputc_unlocked: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  putc_unlocked: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  putchar_unlocked: [ref.types.int32, [
    ref.types.int32,
  ]],
  getw: [ref.types.int32, [
    FILEPtr,
  ]],
  putw: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  fgets: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
    FILEPtr,
  ]],
  __getdelim: [ref.types.long, [
    voidPtr,
    ref.refType(ref.types.int32),
    ref.types.int32,
    FILEPtr,
  ]],
  getdelim: [ref.types.long, [
    voidPtr,
    ref.refType(ref.types.int32),
    ref.types.int32,
    FILEPtr,
  ]],
  getline: [ref.types.long, [
    voidPtr,
    ref.refType(ref.types.int32),
    FILEPtr,
  ]],
  fputs: [ref.types.int32, [
    ref.types.CString,
    FILEPtr,
  ]],
  puts: [ref.types.int32, [
    ref.types.CString,
  ]],
  ungetc: [ref.types.int32, [
    ref.types.int32,
    FILEPtr,
  ]],
  fread: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    FILEPtr,
  ]],
  fwrite: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    FILEPtr,
  ]],
  fread_unlocked: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    FILEPtr,
  ]],
  fwrite_unlocked: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
    FILEPtr,
  ]],
  fseek: [ref.types.int32, [
    FILEPtr,
    ref.types.long,
    ref.types.int32,
  ]],
  ftell: [ref.types.long, [
    FILEPtr,
  ]],
  rewind: [ref.types.void, [
    FILEPtr,
  ]],
  fseeko: [ref.types.int32, [
    FILEPtr,
    ref.types.long,
    ref.types.int32,
  ]],
  ftello: [ref.types.long, [
    FILEPtr,
  ]],
  fgetpos: [ref.types.int32, [
    FILEPtr,
    fpos_t,
  ]],
  fsetpos: [ref.types.int32, [
    FILEPtr,
    fpos_tPtr,
  ]],
  clearerr: [ref.types.void, [
    FILEPtr,
  ]],
  feof: [ref.types.int32, [
    FILEPtr,
  ]],
  ferror: [ref.types.int32, [
    FILEPtr,
  ]],
  clearerr_unlocked: [ref.types.void, [
    FILEPtr,
  ]],
  feof_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  ferror_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  perror: [ref.types.void, [
    ref.types.CString,
  ]],
  fileno: [ref.types.int32, [
    FILEPtr,
  ]],
  fileno_unlocked: [ref.types.int32, [
    FILEPtr,
  ]],
  popen: [FILEPtr, [
    ref.types.CString,
    ref.types.CString,
  ]],
  pclose: [ref.types.int32, [
    FILEPtr,
  ]],
  ctermid: [ref.types.CString, [
    ref.types.CString,
  ]],
  flockfile: [ref.types.void, [
    FILEPtr,
  ]],
  ftrylockfile: [ref.types.int32, [
    FILEPtr,
  ]],
  funlockfile: [ref.types.void, [
    FILEPtr,
  ]],
  __uflow: [ref.types.int32, [
    FILEPtr,
  ]],
  __overflow: [ref.types.int32, [
    FILEPtr,
    ref.types.int32,
  ]],
  memcpy: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.int32,
  ]],
  memmove: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.int32,
  ]],
  memccpy: [voidPtr, [
    voidPtr,
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  memset: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  memcmp: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.int32,
  ]],
  memchr: [voidPtr, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  strcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  strcat: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncat: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  strcmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  strcoll: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strxfrm: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  strcoll_l: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    __locale_structPtr,
  ]],
  strxfrm_l: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
    __locale_structPtr,
  ]],
  strdup: [ref.types.CString, [
    ref.types.CString,
  ]],
  strndup: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strchr: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strrchr: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strcspn: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strspn: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strpbrk: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strstr: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strtok: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  __strtok_r: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  strtok_r: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    voidPtr,
  ]],
  strlen: [ref.types.int32, [
    ref.types.CString,
  ]],
  strnlen: [ref.types.int32, [
    ref.types.CString,
    ref.types.int32,
  ]],
  strerror: [ref.types.CString, [
    ref.types.int32,
  ]],
  strerror_r: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
    ref.types.int32,
  ]],
  strerror_l: [ref.types.CString, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  bcmp: [ref.types.int32, [
    voidPtr,
    voidPtr,
    ref.types.int32,
  ]],
  bcopy: [ref.types.void, [
    voidPtr,
    voidPtr,
    ref.types.int32,
  ]],
  bzero: [ref.types.void, [
    voidPtr,
    ref.types.int32,
  ]],
  index: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  rindex: [ref.types.CString, [
    ref.types.CString,
    ref.types.int32,
  ]],
  ffs: [ref.types.int32, [
    ref.types.int32,
  ]],
  ffsl: [ref.types.int32, [
    ref.types.long,
  ]],
  ffsll: [ref.types.int32, [
    ref.types.longlong,
  ]],
  strcasecmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
  ]],
  strncasecmp: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  strcasecmp_l: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    __locale_structPtr,
  ]],
  strncasecmp_l: [ref.types.int32, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
    __locale_structPtr,
  ]],
  explicit_bzero: [ref.types.void, [
    voidPtr,
    ref.types.int32,
  ]],
  strsep: [ref.types.CString, [
    voidPtr,
    ref.types.CString,
  ]],
  strsignal: [ref.types.CString, [
    ref.types.int32,
  ]],
  __stpcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  stpcpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
  ]],
  __stpncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  stpncpy: [ref.types.CString, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  __ctype_b_loc: [voidPtr, [
  ]],
  __ctype_tolower_loc: [voidPtr, [
  ]],
  __ctype_toupper_loc: [voidPtr, [
  ]],
  isalnum: [ref.types.int32, [
    ref.types.int32,
  ]],
  isalpha: [ref.types.int32, [
    ref.types.int32,
  ]],
  iscntrl: [ref.types.int32, [
    ref.types.int32,
  ]],
  isdigit: [ref.types.int32, [
    ref.types.int32,
  ]],
  islower: [ref.types.int32, [
    ref.types.int32,
  ]],
  isgraph: [ref.types.int32, [
    ref.types.int32,
  ]],
  isprint: [ref.types.int32, [
    ref.types.int32,
  ]],
  ispunct: [ref.types.int32, [
    ref.types.int32,
  ]],
  isspace: [ref.types.int32, [
    ref.types.int32,
  ]],
  isupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  isxdigit: [ref.types.int32, [
    ref.types.int32,
  ]],
  tolower: [ref.types.int32, [
    ref.types.int32,
  ]],
  toupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  isblank: [ref.types.int32, [
    ref.types.int32,
  ]],
  isascii: [ref.types.int32, [
    ref.types.int32,
  ]],
  toascii: [ref.types.int32, [
    ref.types.int32,
  ]],
  _toupper: [ref.types.int32, [
    ref.types.int32,
  ]],
  _tolower: [ref.types.int32, [
    ref.types.int32,
  ]],
  isalnum_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isalpha_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  iscntrl_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isdigit_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  islower_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isgraph_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isprint_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  ispunct_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isspace_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isupper_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isxdigit_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  isblank_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  __tolower_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  tolower_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  __toupper_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  toupper_l: [ref.types.int32, [
    ref.types.int32,
    __locale_structPtr,
  ]],
  __assert_fail: [ref.types.void, [
    ref.types.CString,
    ref.types.CString,
    ref.types.uint32,
    ref.types.CString,
  ]],
  __assert_perror_fail: [ref.types.void, [
    ref.types.int32,
    ref.types.CString,
    ref.types.uint32,
    ref.types.CString,
  ]],
  __assert: [ref.types.void, [
    ref.types.CString,
    ref.types.CString,
    ref.types.int32,
  ]],
  __errno_location: [ref.refType(ref.types.int32), [
  ]],
  GetBits: [ref.types.void, [
    TBitArrayPtr,
    ref.types.uint32,
    ref.types.uint32,
    voidPtr,
    ref.types.int32,
  ]],
  SetBits: [ref.types.void, [
    TBitArrayPtr,
    ref.types.uint32,
    ref.types.uint32,
    voidPtr,
    ref.types.int32,
  ]],
  FileStream_CreateFile: [TFileStream, [
    TCHAR,
    ref.types.uint32,
  ]],
  FileStream_OpenFile: [TFileStreamPtr, [
    TCHARPtr,
    ref.types.uint32,
  ]],
  FileStream_GetFileName: [TCHARPtr, [
    TFileStreamPtr,
  ]],
  FileStream_Prefix: [ref.types.int32, [
    TCHARPtr,
    DWORD,
  ]],
  FileStream_SetCallback: [ref.types.char, [
    TFileStreamPtr,
    SFILE_DOWNLOAD_CALLBACK,
    voidPtr,
  ]],
  FileStream_GetBitmap: [ref.types.char, [
    TFileStreamPtr,
    voidPtr,
    ref.types.uint32,
    LPDWORD,
  ]],
  FileStream_Read: [ref.types.char, [
    TFileStreamPtr,
    ULONGLONG,
    voidPtr,
    ref.types.uint32,
  ]],
  FileStream_Write: [ref.types.char, [
    TFileStreamPtr,
    ULONGLONGPtr,
    voidPtr,
    ref.types.uint32,
  ]],
  FileStream_SetSize: [ref.types.char, [
    TFileStreamPtr,
    ref.types.ulonglong,
  ]],
  FileStream_GetSize: [ref.types.char, [
    TFileStreamPtr,
    ULONGLONGPtr,
  ]],
  FileStream_GetPos: [ref.types.char, [
    TFileStreamPtr,
    ULONGLONGPtr,
  ]],
  FileStream_GetTime: [ref.types.char, [
    TFileStreamPtr,
    ULONGLONGPtr,
  ]],
  FileStream_GetFlags: [ref.types.char, [
    TFileStreamPtr,
    LPDWORD,
  ]],
  FileStream_Replace: [ref.types.char, [
    TFileStreamPtr,
    TFileStreamPtr,
  ]],
  FileStream_Close: [ref.types.void, [
    TFileStreamPtr,
  ]],
  SFileGetLocale: [ref.types.uint32, [
  ]],
  SFileSetLocale: [ref.types.uint32, [
    ref.types.uint32,
  ]],
  SFileOpenArchive: [ref.types.char, [
    TCHARPtr,
    ref.types.uint32,
    ref.types.uint32,
    HANDLE,
  ]],
  SFileCreateArchive: [ref.types.char, [
    TCHARPtr,
    ref.types.uint32,
    ref.types.uint32,
    HANDLEPtr,
  ]],
  SFileCreateArchive2: [ref.types.char, [
    TCHARPtr,
    _SFILE_CREATE_MPQPtr,
    HANDLEPtr,
  ]],
  SFileSetDownloadCallback: [ref.types.char, [
    HANDLE,
    SFILE_DOWNLOAD_CALLBACK,
    voidPtr,
  ]],
  SFileFlushArchive: [ref.types.char, [
    HANDLE,
  ]],
  SFileCloseArchive: [ref.types.char, [
    HANDLE,
  ]],
  SFileAddListFile: [ref.types.int32, [
    HANDLE,
    TCHARPtr,
  ]],
  SFileSetCompactCallback: [ref.types.char, [
    HANDLE,
    SFILE_COMPACT_CALLBACK,
    voidPtr,
  ]],
  SFileCompactArchive: [ref.types.char, [
    HANDLE,
    TCHARPtr,
    ref.types.char,
  ]],
  SFileGetMaxFileCount: [ref.types.uint32, [
    HANDLE,
  ]],
  SFileSetMaxFileCount: [ref.types.char, [
    HANDLE,
    ref.types.uint32,
  ]],
  SFileGetAttributes: [ref.types.uint32, [
    HANDLE,
  ]],
  SFileSetAttributes: [ref.types.char, [
    HANDLE,
    ref.types.uint32,
  ]],
  SFileUpdateFileAttributes: [ref.types.char, [
    HANDLE,
    ref.types.CString,
  ]],
  SFileOpenPatchArchive: [ref.types.char, [
    HANDLE,
    TCHARPtr,
    ref.types.CString,
    ref.types.uint32,
  ]],
  SFileIsPatchedArchive: [ref.types.char, [
    HANDLE,
  ]],
  SFileHasFile: [ref.types.char, [
    HANDLE,
    ref.types.CString,
  ]],
  SFileOpenFileEx: [ref.types.char, [
    HANDLE,
    ref.types.CString,
    ref.types.uint32,
    HANDLEPtr,
  ]],
  SFileGetFileSize: [ref.types.uint32, [
    HANDLE,
    LPDWORD,
  ]],
  SFileSetFilePointer: [ref.types.uint32, [
    HANDLE,
    ref.types.int32,
    LONG,
    ref.types.uint32,
  ]],
  SFileReadFile: [ref.types.char, [
    HANDLE,
    voidPtr,
    ref.types.uint32,
    LPDWORD,
    LPOVERLAPPED,
  ]],
  SFileCloseFile: [ref.types.char, [
    HANDLE,
  ]],
  SFileGetFileInfo: [ref.types.char, [
    HANDLE,
    ref.types.uint32,
    voidPtr,
    ref.types.uint32,
    LPDWORD,
  ]],
  SFileGetFileName: [ref.types.char, [
    HANDLE,
    ref.types.CString,
  ]],
  SFileFreeFileInfo: [ref.types.char, [
    voidPtr,
    ref.types.uint32,
  ]],
  SFileExtractFile: [ref.types.char, [
    HANDLE,
    ref.types.CString,
    TCHARPtr,
    ref.types.uint32,
  ]],
  SFileGetFileChecksums: [ref.types.char, [
    HANDLE,
    ref.types.CString,
    LPDWORD,
    ref.types.CString,
  ]],
  SFileVerifyFile: [ref.types.uint32, [
    HANDLE,
    ref.types.CString,
    ref.types.uint32,
  ]],
  SFileVerifyRawData: [ref.types.int32, [
    HANDLE,
    ref.types.uint32,
    ref.types.CString,
  ]],
  SFileSignArchive: [ref.types.char, [
    HANDLE,
    ref.types.uint32,
  ]],
  SFileVerifyArchive: [ref.types.uint32, [
    HANDLE,
  ]],
  SFileFindFirstFile: [HANDLE, [
    HANDLE,
    ref.types.CString,
    SFILE_FIND_DATAPtr,
    TCHARPtr,
  ]],
  SFileFindNextFile: [ref.types.char, [
    HANDLE,
    SFILE_FIND_DATAPtr,
  ]],
  SFileFindClose: [ref.types.char, [
    HANDLE,
  ]],
  SListFileFindFirstFile: [HANDLE, [
    HANDLE,
    TCHARPtr,
    ref.types.CString,
    SFILE_FIND_DATAPtr,
  ]],
  SListFileFindNextFile: [ref.types.char, [
    HANDLE,
    SFILE_FIND_DATAPtr,
  ]],
  SListFileFindClose: [ref.types.char, [
    HANDLE,
  ]],
  SFileEnumLocales: [ref.types.int32, [
    HANDLE,
    ref.types.CString,
    LCID,
    LPDWORD,
    ref.types.uint32,
  ]],
  SFileCreateFile: [ref.types.char, [
    HANDLE,
    ref.types.CString,
    ref.types.ulonglong,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.uint32,
    HANDLEPtr,
  ]],
  SFileWriteFile: [ref.types.char, [
    HANDLE,
    voidPtr,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SFileFinishFile: [ref.types.char, [
    HANDLE,
  ]],
  SFileAddFileEx: [ref.types.char, [
    HANDLE,
    TCHARPtr,
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SFileAddFile: [ref.types.char, [
    HANDLE,
    TCHARPtr,
    ref.types.CString,
    ref.types.uint32,
  ]],
  SFileAddWave: [ref.types.char, [
    HANDLE,
    TCHARPtr,
    ref.types.CString,
    ref.types.uint32,
    ref.types.uint32,
  ]],
  SFileRemoveFile: [ref.types.char, [
    HANDLE,
    ref.types.CString,
    ref.types.uint32,
  ]],
  SFileRenameFile: [ref.types.char, [
    HANDLE,
    ref.types.CString,
    ref.types.CString,
  ]],
  SFileSetFileLocale: [ref.types.char, [
    HANDLE,
    ref.types.uint32,
  ]],
  SFileSetDataCompression: [ref.types.char, [
    ref.types.uint32,
  ]],
  SFileSetAddFileCallback: [ref.types.char, [
    HANDLE,
    SFILE_ADDFILE_CALLBACK,
    voidPtr,
  ]],
  SCompImplode: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
    ref.types.int32,
  ]],
  SCompExplode: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
    ref.types.int32,
  ]],
  SCompCompress: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
    ref.types.int32,
    ref.types.uint32,
    ref.types.int32,
    ref.types.int32,
  ]],
  SCompDecompress: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
    ref.types.int32,
  ]],
  SCompDecompress2: [ref.types.int32, [
    voidPtr,
    ref.refType(ref.types.int32),
    voidPtr,
    ref.types.int32,
  ]],
  SetLastError: [ref.types.void, [
    ref.types.uint32,
  ]],
  GetLastError: [ref.types.uint32, [
  ]],
});

