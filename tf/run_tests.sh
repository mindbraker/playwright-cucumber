#environment 
env=$1

#cucumber tag
tag=$2

#run cucumber tests & on failure run postcucumber
yarn run cucumber:$env --profile $tag || yarn run postcucumber