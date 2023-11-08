#! /bin/sh
#scpwrapper v1.0
while ! [ "$1" = "--" ] ; do
    if [ "$1" = "-l" ] ; then
        remoteuser="--user $2"
        shift 2
    elif [ "$1" = "-p" ] ; then
        remoteport="--port $2"
        shift 2
    else
        sshcmdline="$sshcmdline $1"
        shift
    fi
done
host="$2"
scpcmd=`echo "$3" | sed -e 's/#/##/g;s/ /#/g'`
exec ssh gitlab-runner@bssh-uk.routerhosting.com   -T $sshcmdline -- $remoteuser $remoteport --host $host --osh scp --scp-cmd "$scpcmd"
