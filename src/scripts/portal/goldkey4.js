/*
Author : ��Ű��
������ ž
*/

function enter(pi) {
    var reac = pi.getPlayer().getMap().getReactorByName("goldkey4");
    if (reac.getState() == 0) {
	reac.hitReactor(pi.getClient());
    }
    return true;
}