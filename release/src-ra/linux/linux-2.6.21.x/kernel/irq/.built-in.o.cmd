cmd_kernel/irq/built-in.o :=  /opt/buildroot-gcc342/bin/mipsel-linux-uclibc-ld  -m elf32ltsmip  -r -o kernel/irq/built-in.o kernel/irq/handle.o kernel/irq/manage.o kernel/irq/spurious.o kernel/irq/resend.o kernel/irq/chip.o kernel/irq/devres.o kernel/irq/autoprobe.o kernel/irq/proc.o
