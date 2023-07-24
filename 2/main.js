
function howManyseat(cap, on, wait) {

if(cap - (on+wait) > 0) {
    return 'there are free seat'
} else {
    return wait - (cap-on)
}

}