#/bin/bash
COMMIT_ID=$(git rev-parse HEAD)
BUILD_DIR=${COMMIT_ID}-server.tar.gz
SERVER_DST=aws-sp

# Build release version of site.
echo '--------------------------------'
echo 'Building distribution.'
echo '--------------------------------'
cd client
grunt build

# Create tarball of site and push to server
echo '--------------------------------'
echo 'Compressing.'
echo '--------------------------------'
cd ..
tar -czvf $BUILD_DIR server/

echo '--------------------------------'
echo 'Copying to remote server.'
echo '--------------------------------'
scp $BUILD_DIR ${SERVER_DST}:~
