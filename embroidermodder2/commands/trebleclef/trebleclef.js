//Command: TrebleClef

var global = {}; //Required
global.numPoints = 1024; //Default //TODO: min:64 max:8192
global.cx;
global.cy;
global.sx = 0.04; //Default
global.sy = 0.04; //Default
global.numPoints;
global.mode;

//enums
global.mode_NUM_POINTS = 0;
global.mode_XSCALE     = 1;
global.mode_YSCALE     = 2;

//NOTE: main() is run every time the command is started.
//      Use it to reset variables so they are ready to go.
function main()
{
    initCommand();
    clearSelection();
    global.cx = NaN;
    global.cy = NaN;
    global.mode = global.mode_NUM_POINTS;

    addRubber("POLYGON");
    setRubberMode("POLYGON");
    updateClef(global.numPoints, global.sx, global.sy);
    spareRubber("POLYGON");
    endCommand();
}

//NOTE: click() is run only for left clicks.
//      Middle clicks are used for panning.
//      Right clicks bring up the context menu.
function click(x, y)
{
}

//NOTE: context() is run when a context menu entry is chosen.
function context(str)
{
    todo("TREBLECLEF", "context()");
}

//NOTE: prompt() is run when Enter is pressed.
//      appendPromptHistory is automatically called before prompt()
//      is called so calling it is only needed for erroneous input.
//      Any text in the command prompt is sent as an uppercase string.
function prompt(str)
{
}

function updateClef(numPts, xScale, yScale)
{
    var i;
    var t;
    var xx = NaN;
    var yy = NaN;
    var sixteen_pi = 16*Math.PI;

    for(i = 0; i <= numPts; i++)
    {
        t = sixteen_pi/numPts*i;

        xx = ((-1/12*Math.sin(215/214-18*t)-
        9/17*Math.sin(23/17-12*t)-
        15/22*Math.sin(34/33-10*t)-
        10/13*Math.sin(11/13-8*t)-
        22/29*Math.sin(23/19-6*t)+
        1777/23*Math.sin(t+52/21)+
        279/16*Math.sin(2*t+113/26)+
        97/12*Math.sin(3*t+43/20)+
        35/13*Math.sin(4*t+93/22)+
        34/11*Math.sin(5*t+47/26)+
        29/19*Math.sin(7*t+29/19)+
        23/34*Math.sin(9*t+13/10)+
        2/9*Math.sin(11*t+369/185)+
        1/6*Math.sin(13*t+38/15)+
        4/11*Math.sin(14*t+37/8)+
        7/23*Math.sin(15*t+44/21)+
        2/19*Math.sin(16*t+132/29)+
        5/16*Math.sin(17*t+58/27)+2121/22)*
        theta(15*Math.PI-t)*
        theta(t-11*Math.PI)+
        (-21/23*Math.sin(3/19-18*t)-
        18/55*Math.sin(34/25-15*t)-
        47/16*Math.sin(19/33-13*t)-
        2094/53*Math.sin(29/28-3*t)+
        2692/27*Math.sin(t+89/41)+
        2331/22*Math.sin(2*t+17/16)+
        2226/73*Math.sin(4*t+7/20)+
        257/19*Math.sin(5*t+53/20)+
        128/11*Math.sin(6*t+40/11)+
        101/11*Math.sin(7*t+85/22)+
        163/30*Math.sin(8*t+50/11)+
        24/13*Math.sin(9*t+11/14)+
        77/23*Math.sin(10*t+34/15)+
        8/47*Math.sin(11*t+41/14)+
        1/112*Math.sin(12*t+29/26)+
        31/11*Math.sin(14*t+12/19)+
        5/19*Math.sin(16*t+11/19)+
        48/29*Math.sin(17*t+46/11)+
        35/44*Math.sin(19*t+191/82)+
        13/15*Math.sin(20*t+62/33)+
        29/25*Math.sin(21*t+27/10)+
        11/45*Math.sin(22*t+104/25)+
        42/85*Math.sin(23*t+3/16)+
        1/2*Math.sin(24*t+29/28)-2503/17)*
        theta(11*Math.PI-t)*
        theta(t-7*Math.PI)+
        (-3/4*Math.sin(13/14-6*t)-
        29/14*Math.sin(23/40-4*t)-
        693/65*Math.sin(7/17-2*t)+
        1869/20*Math.sin(t+137/38)+
        79/11*Math.sin(3*t+36/11)+
        38/15*Math.sin(5*t+28/9)+
        79/63*Math.sin(7*t+41/14)+
        16/63*Math.sin(8*t+275/61)-1053/43)*
        theta(7*Math.PI-t)*
        theta(t-3*Math.PI)+
        (-7/11*Math.sin(34/31-38*t)-
        199/99*Math.sin(3/13-32*t)-
        26/23*Math.sin(2/25-26*t)-
        127/39*Math.sin(130/87-17*t)-
        49/13*Math.sin(15/13-16*t)-
        231/37*Math.sin(7/15-14*t)-
        113/10*Math.sin(3/29-12*t)-
        1242/29*Math.sin(12/25-6*t)-
        1433/32*Math.sin(12/11-4*t)-
        1361/10*Math.sin(22/21-3*t)-
        577/7*Math.sin(1/9-2*t)+
        6392/35*Math.sin(t+87/28)+
        3316/67*Math.sin(5*t+26/9)+
        864/29*Math.sin(7*t+13/18)+
        376/11*Math.sin(8*t+19/16)+
        13/9*Math.sin(9*t+14/15)+
        187/18*Math.sin(10*t+35/34)+
        1826/203*Math.sin(11*t+10/19)+
        317/36*Math.sin(13*t+14/23)+
        221/59*Math.sin(15*t+47/11)+
        43/27*Math.sin(18*t+16/13)+
        47/21*Math.sin(19*t+44/13)+
        26/7*Math.sin(20*t+57/13)+
        35/27*Math.sin(21*t+47/12)+
        57/29*Math.sin(22*t+77/17)+
        53/37*Math.sin(23*t+51/19)+
        41/22*Math.sin(24*t+30/19)+
        47/28*Math.sin(25*t+52/15)+
        13/16*Math.sin(27*t+15/16)+
        11/54*Math.sin(28*t+61/49)+
        31/20*Math.sin(29*t+16/17)+
        12/25*Math.sin(30*t+17/13)+
        11/20*Math.sin(31*t+59/14)+
        5/21*Math.sin(33*t+7/3)+
        7/25*Math.sin(34*t+397/99)+
        7/19*Math.sin(35*t+61/14)+
        12/19*Math.sin(36*t+65/23)+
        12/25*Math.sin(37*t+77/17)+
        9/13*Math.sin(39*t+383/128)+
        7/13*Math.sin(40*t+41/11)+
        7/10*Math.sin(41*t+22/7)+
        1/13*Math.sin(42*t+7/4)+
        4/21*Math.sin(43*t+9/2)+
        13/35*Math.sin(44*t+63/34)+
        3/16*Math.sin(45*t+137/68)+
        2/23*Math.sin(46*t+237/59)+
        2/7*Math.sin(47*t+43/21)-727/14)*
        theta(3*Math.PI-t)*
        theta(t+Math.PI))*
        theta(Math.sqrt(sgn(Math.sin(t/2))));

        yy = ((-1/43*Math.sin(21/17-14*t)-
        7/20*Math.sin(2/11-12*t)-
        15/22*Math.sin(53/40-11*t)-
        37/73*Math.sin(11/21-9*t)+
        2072/13*Math.sin(t+109/25)+
        47/7*Math.sin(2*t+83/26)+
        193/17*Math.sin(3*t+91/24)+
        203/45*Math.sin(4*t+61/28)+
        52/23*Math.sin(5*t+233/78)+
        37/13*Math.sin(6*t+47/30)+
        8/17*Math.sin(7*t+17/10)+
        11/7*Math.sin(8*t+28/29)+
        5/6*Math.sin(10*t+11/27)+
        2/3*Math.sin(13*t+84/19)+
        22/45*Math.sin(15*t+82/21)+
        5/21*Math.sin(16*t+25/12)+
        8/25*Math.sin(17*t+37/11)+
        10/29*Math.sin(18*t+18/11)-2967/17)*
        theta(15*Math.PI-t)*
        theta(t-11*Math.PI)+
        (-14/17*Math.sin(3/11-15*t)-
        123/44*Math.sin(9/7-11*t)-
        97/34*Math.sin(4/13-10*t)-
        157/23*Math.sin(22/15-7*t)+
        4709/23*Math.sin(t+122/27)+
        3533/21*Math.sin(2*t+105/52)+
        1400/27*Math.sin(3*t+65/24)+
        1141/39*Math.sin(4*t+55/19)+
        150/11*Math.sin(5*t+266/59)+
        205/39*Math.sin(6*t+28/19)+
        18/7*Math.sin(8*t+11/9)+
        124/17*Math.sin(9*t+131/28)+
        11/6*Math.sin(12*t+13/17)+
        35/27*Math.sin(13*t+58/15)+
        15/26*Math.sin(14*t+10/13)+
        87/43*Math.sin(16*t+33/29)+
        17/24*Math.sin(17*t+32/25)+
        38/31*Math.sin(18*t+31/17)+
        25/29*Math.sin(19*t+193/42)+
        11/17*Math.sin(20*t+21/23)+
        6/11*Math.sin(21*t+67/15)+
        24/29*Math.sin(22*t+36/19)+
        61/51*Math.sin(23*t+80/21)+
        1/5*Math.sin(24*t+37/11)-1831/17)*
        theta(11*Math.PI-t)*
        theta(t-7*Math.PI)+
        (2588/15*Math.sin(t+14/3)+
        101/26*Math.sin(2*t+65/23)+
        6273/392*Math.sin(3*t+101/24)+
        65/33*Math.sin(4*t+27/8)+
        201/40*Math.sin(5*t+89/23)+
        31/26*Math.sin(6*t+31/10)+
        17/7*Math.sin(7*t+97/28)+
        17/19*Math.sin(8*t+161/54)+6478/9)*
        theta(7*Math.PI-t)*
        theta(t-3*Math.PI)+
        (-21/52*Math.sin(13/14-45*t)-
        11/20*Math.sin(20/19-44*t)-
        9/35*Math.sin(5/18-41*t)-
        13/66*Math.sin(18/23-39*t)-
        5/16*Math.sin(3/28-38*t)-
        3/23*Math.sin(29/26-35*t)-
        19/47*Math.sin(5/16-32*t)-
        6/17*Math.sin(134/89-31*t)-
        39/49*Math.sin(21/23-25*t)-
        47/23*Math.sin(19/22-19*t)-
        23/10*Math.sin(11/38-13*t)-
        1229/25*Math.sin(17/21-3*t)+
        11043/13*Math.sin(t+61/13)+
        1837/12*Math.sin(2*t+25/18)+
        1030/13*Math.sin(4*t+41/25)+
        1425/37*Math.sin(5*t+22/9)+
        1525/28*Math.sin(6*t+5/3)+
        796/31*Math.sin(7*t+35/26)+
        803/43*Math.sin(8*t+11/7)+
        267/28*Math.sin(9*t+51/11)+
        108/17*Math.sin(10*t+23/18)+
        196/31*Math.sin(11*t+83/34)+
        123/26*Math.sin(12*t+33/16)+
        124/33*Math.sin(14*t+41/29)+
        39/10*Math.sin(15*t+47/12)+
        18/37*Math.sin(16*t+21/17)+
        77/27*Math.sin(17*t+47/22)+
        64/23*Math.sin(18*t+52/25)+
        28/9*Math.sin(20*t+21/62)+
        7/12*Math.sin(21*t+93/29)+
        8/41*Math.sin(22*t+23/15)+
        12/29*Math.sin(23*t+29/25)+
        29/20*Math.sin(24*t+5/4)+
        46/27*Math.sin(26*t+7/36)+
        21/41*Math.sin(27*t+62/17)+
        29/33*Math.sin(28*t+70/19)+
        15/19*Math.sin(29*t+61/15)+
        29/39*Math.sin(30*t+17/15)+
        33/41*Math.sin(33*t+76/21)+
        17/30*Math.sin(34*t+56/17)+
        9/10*Math.sin(36*t+33/29)+
        2/13*Math.sin(37*t+21/8)+
        1/65*Math.sin(40*t+11/20)+
        3/4*Math.sin(42*t+14/15)+
        1/12*Math.sin(43*t+59/58)+
        2/9*Math.sin(46*t+50/21)+
        8/39*Math.sin(47*t+56/17)-1223/15)*
        theta(3*Math.PI-t)*
        theta(t+Math.PI))*
        theta(Math.sqrt(sgn(Math.sin(t/2))));

        setRubberPoint("POLYGON_POINT_" + i.toString(), xx*xScale, yy*yScale);
    }

    setRubberText("POLYGON_NUM_POINTS", numPts.toString());
}

function sgn(x)
{
    if(x > 0) return 1;
    else if(x < 0) return -1;
    else return 0;
}

function theta(x)
{
    if(x < 0) return 0;
    else return 1;
}

