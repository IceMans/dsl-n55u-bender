cmd_vmlinux := /opt/buildroot-gcc342/bin/mipsel-linux-uclibc-ld  -m elf32ltsmip -G 0 -static -n -nostdlib -o vmlinux -T arch/mips/kernel/vmlinux.lds arch/mips/kernel/head.o arch/mips/kernel/init_task.o  init/built-in.o --start-group  usr/built-in.o  arch/mips/rt2880/built-in.o  arch/mips/kernel/built-in.o  arch/mips/mm/built-in.o  arch/mips/math-emu/built-in.o  kernel/built-in.o  mm/built-in.o  fs/built-in.o  ipc/built-in.o  security/built-in.o  crypto/built-in.o  block/built-in.o  lib/lib.a  arch/mips/lib/lib.a  arch/mips/lib-32/lib.a  lib/built-in.o  arch/mips/lib/built-in.o  arch/mips/lib-32/built-in.o  drivers/built-in.o  sound/built-in.o  arch/mips/pci/built-in.o  net/built-in.o --end-group .tmp_kallsyms2.o
