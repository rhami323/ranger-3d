// ===== DATA (all sourced; st: V = verified on a Ford parts catalog page for 1997 Ranger 2.3L, C = check: listed for Ranger but catalog note ambiguous / search-summary only, U = unverified)
const SRC={
 fpdEng:["FordPartsDeal 1997 Ranger engine diagram (2.3L)","https://www.fordpartsdeal.com/parts-list/1997-ford-ranger/engine/engine"],
 fpdWP:["FordPartsDeal 1997 Ranger water pump/cooling","https://www.fordpartsdeal.com/parts-list/1997-ford-ranger/belts-cooling/water-pump"],
 opoEng:["OEMPartsOnline 1997 Ranger XL 2.3L engine parts","https://ford.oempartsonline.com/v-1997-ford-ranger--xl--2-3l-l4-gas/engine--engine-parts"],
 opoWP:["OEMPartsOnline 1997 Ranger 2.3L water pump/cooling","https://ford.oempartsonline.com/v-1997-ford-ranger--xl--2-3l-l4-gas/cooling-system--water-pump"],
 opoIgn:["OEMPartsOnline Ranger 2.3L ignition (1996 page, same engine)","https://ford.oempartsonline.com/v-1996-ford-ranger--xlt--2-3l-l4-gas/electrical--ignition-system"],
 opoSt:["OEMPartsOnline 1997 Ranger 2.3L starter","https://ford.oempartsonline.com/v-1997-ford-ranger--xl--2-3l-l4-gas/electrical--starter"],
 opoAlt:["OEMPartsOnline 1997 Ranger 2.3L alternator","https://ford.oempartsonline.com/v-1997-ford-ranger--xlt--2-3l-l4-gas/electrical--alternator"],
 fpgHose:["FordPartsGiant 1997 Ranger radiator hoses","https://www.fordpartsgiant.com/oem-1997-ford-ranger-radiator_hose.html"],
 fpgTrans:["FordPartsGiant 1997 Ranger transmission assy","https://www.fordpartsgiant.com/oem-1997-ford-ranger-transmission_assembly.html"],
 raPlug:["RockAuto 1997 Ranger 2.3L spark plugs","https://www.rockauto.com/en/catalog/ford,1997,ranger,2.3l+l4,1138148,ignition,spark+plug,7212"],
 raTB:["RockAuto 1997 Ranger 2.3L timing belt kits","https://www.rockauto.com/en/catalog/ford,1997,ranger,2.3l+l4,1138148,engine,timing+belt+&+component+kit,5759"],
 raAlt:["RockAuto 1997 Ranger 2.3L alternator","https://www.rockauto.com/en/catalog/ford,1997,ranger,2.3l+l4,1138148,electrical,alternator+/+generator,2412"],
 raEng:["RockAuto 1997 Ranger 2.3L engine catalog","https://www.rockauto.com/en/catalog/ford,1997,ranger,2.3l+l4,1138148,engine"],
 pgAir:["PartsGeek Motorcraft FA-1616 fitment","https://www.partsgeek.com/zlpj9zq-ford-ranger-air-filter.html"],
 dayco:["PartsHawk Dayco WP276K1A fitment","https://partshawk.com/dayco-wp276k1a-engine-timing-belt-kit-with-water-pump.html"],
 inj:["FordPartsCatalog Motorcraft CM-4779 (1995-97 Ranger)","https://www.fordpartscatalog.com/oem-parts/ford-motorcraft-fuel-injector-cm4779"],
 orFuel:["O'Reilly 1997 Ranger fuel filter","https://www.oreillyauto.com/shop/b/filters/fuel-filter/5eeeee130a10/v/a/5528/automotive-truck-1997-ford-ranger"],
 charmAsm:["Service manual (charm.li) 1997 Ranger 2.3L engine assembly","https://charm.li/Ford/1997/Ranger%202WD%20L4-140%202.3L%20VIN%20A%20EFI/Repair%20and%20Diagnosis/Engine%2C%20Cooling%20and%20Exhaust/Engine/Service%20and%20Repair/Assembly/"],
 charmFly:["Service manual (charm.li) flywheel specs","https://charm.li/Ford/1997/Ranger%202WD%20L4-140%202.3L%20VIN%20A%20EFI/Repair%20and%20Diagnosis/Transmission%20and%20Drivetrain/Flywheel/Specifications/"],
 wsm:["1997 Aerostar/Ranger 2.3L workshop manual (manualzz)","https://manualzz.com/doc/24822868/ford-aerostar-ranger-2.3l-i-4-engine-workshop-manual"],
 fixya:["Fixya head bolt TTY note","https://www.fixya.com/cars/t6408719-need_torque_specs_1997_ford_ranger"],
 trsTrans:["The Ranger Station: Ranger automatic transmissions","https://www.therangerstation.com/tech/ford-ranger-automatic-transmissions/"],
 trsA4:["The Ranger Station: A4LD/4R44E","https://www.therangerstation.com/tech/ford-ranger-a4ld-automatic-transmission/"],
 trs4:["The Ranger Station: Ranger 4-cylinder engines","https://www.therangerstation.com/tech/ford-ranger-4-cylinder-engines/"],
 trsDim:["The Ranger Station: Ranger dimensions","https://www.therangerstation.com/tech/ford-ranger-dimensions/"],
 trsCoil:["The Ranger Station forum: 2.3L coil packs","https://www.therangerstation.com/forums/threads/coil-packs.189237/"],
 lug:["Workshop manual: 1997 Ranger wheel fastener","https://workshop-manuals.com/ford/ranger_2wd/v6-245_4.0l_vin_x_sfi/maintenance/wheels_and_tires/wheel_fastener/component_information/technical_service_bulletins/page_2160/"],
 aa:["1A Auto: front brakes 1995-97 Ranger","https://www.1aauto.com/how-to-replace-front-brakes-1995-97-ford-ranger/video/46394"],
 ajuste:["Ajuste de Motor: Ranger 1993-97 2.3 specs","https://ajustedemotor.blogspot.com/2024/04/ford-ranger-1993-97-23-a.html"],
};
const SYS={eng:"Engine internals",acc:"Accessories",cool:"Cooling & hoses",fuel:"Fuel",intk:"Intake / exhaust",elec:"Electrical / ignition",trans:"Transmission",susp:"Suspension / driveline",brake:"Brakes",body:"Body / frame"};
// P(id,name,sys,group,shape,pos,color,info)
// shape: [type,...] box: w(x),h(y),d(z) ; cyl: r, len, axis ; units = inches
const PARTS=[];
function P(id,n,sys,grp,shape,pos,col,i={}){PARTS.push(Object.assign({id,n,sys,grp,shape,pos,col,oem:[],am:[],tips:[],bolts:null,dim:null},i))}
const pn=(n,d,st,src)=>({n,d,st,src});
// ---------- BODY / FRAME (x fwd from front axle, y up, z right) ----------
P("frame","Frame (ladder, 2 rails)","body","frame",["box",150,6,3],[-48,16,0],0x333333,{dim:{t:"Wheelbase 107.9 in (6 ft bed) / 113.9 in (7 ft bed) for 1993-97 regular cab. Model is drawn at 107.9 in.",st:"C",src:"trsDim"},tips:[{t:"111.5/117.5 in wheelbases are 1998+ Rangers - don't use 1998+ frame/body specs for a 1997.",src:"trsDim"}]});
P("cab","Cab shell (regular cab)","body","body",["box",50,36,64],[-52,52,0],0x8a1c1c,{tips:[{t:"Overall length about 184.3 in for the short-bed regular cab (summary of spec sites, confirm).",src:"trsDim"}]});
P("bed","Cargo box (bed)","body","body",["box",72,18,64],[-118,38,0],0x8a1c1c,{dim:{t:"6 ft or 7 ft box depending on wheelbase. Exact inside dims: unverified.",st:"U"}});
P("hood","Hood","body","hood",["box",44,2,60],[-3,46,0],0x9a2222,{});
P("doorL","Door, left","body","doorL",["box",40,30,2],[-50,47,-32.5],0x9a2222,{});
P("doorR","Door, right","body","doorR",["box",40,30,2],[-50,47,32.5],0x9a2222,{});
P("fenderL","Front fender, left","body","body",["box",50,14,4],[-2,36,-30],0x8a1c1c,{});
P("fenderR","Front fender, right","body","body",["box",50,14,4],[-2,36,30],0x8a1c1c,{});
P("grille","Grille / header panel","body","body",["box",3,12,52],[21,38,0],0x222222,{});
P("bumperF","Front bumper","body","body",["box",6,6,64],[26,22,0],0xbbbbbb,{});
P("bumperR","Rear bumper","body","body",["box",6,6,64],[-157,22,0],0xbbbbbb,{});
// ---------- ENGINE (2.3L Lima SOHC, longitudinal) ----------
const ENG={dim:{t:"2.3L (140 cid) SOHC 8-valve, bore 3.780 in (96.0 mm) x stroke 3.126 in (79.4 mm), 1-3-4-2 firing order, dual plug head.",st:"C",src:"trs4"}};
P("block","Cylinder block","eng","engine",["box",20,13,9],[-6,26,0],0x667080,Object.assign({oem:[pn("Ford short block / block casting","Not listed for 2.3L on catalog page seen","U","fpdEng")],tips:[{t:"Common 2.3L leaks: front seals (cam/aux shaft/crank) - replace all three when doing the timing belt.",src:"trs4"}]},ENG));
P("head","Cylinder head","eng","engine",["box",20,5,9],[-6,35,0],0x7a8494,{oem:[pn("F77Z-6049-AA","Cylinder head, without valves, 2.3L","V","fpdEng"),pn("F87Z-6049-BARM","Reman cylinder head (Ranger)","C","fpdEng")],bolts:{d:"10 head bolts, torque-to-yield (M12 - size unverified)",sp:"Step 1: 51 ft-lb in sequence; Step 2: 51 ft-lb again; Step 3: +90-100 degrees. Use NEW bolts.",st:"C",src:"wsm",n:10},tips:[{t:"Head bolts are torque-to-yield - don't reuse them.",src:"fixya"}]});
P("headgasket","Head gasket","eng","engine",["box",20,0.4,9],[-6,32.6,0],0x444444,{oem:[pn("(2.3L number not shown)","Only 2.5L F3ZZ-6051-C and V6 numbers on catalog page - don't order those for 2.3L","U","fpdEng")],am:[pn("Fel-Pro / Victor head set","Look up by engine on RockAuto","U","raEng")]});
P("valvecover","Valve (cam) cover","eng","engine",["box",19,3,8],[-6,39,0],0x2c2c2c,{oem:[pn("F57Z-6584-A","Valve cover gasket - listed 'Ranger' (2.3L/2.5L page)","C","fpdEng")],bolts:{d:"Cam cover bolts",sp:"unverified",st:"U",n:6}});
P("cam","Camshaft (SOHC)","eng","engine",["cyl",0.8,19,"x"],[-6,36,0],0xd0c080,{oem:[pn("F3TZ-6250-A","Camshaft 'Ranger; Federal' (engine not stated)","C","fpdEng"),pn("D4FZ-6261-C","Cam bearings No.1-4 (Bronco II, Ranger)","C","fpdEng")]});
P("camsprocket","Camshaft sprocket","eng","engine",["cyl",3,1,"x"],[5,36,0],0xc0c0c0,{oem:[pn("F87Z-6256-AA","Sprocket - camshaft (page note says 2.5L/2.3L, same Lima family)","C","fpdEng")],bolts:{d:"Cam sprocket bolt + washer",sp:"52-70 ft-lb (70-95 Nm)",st:"V",src:"wsm",n:1}});
P("rocker","Rocker arms (roller followers) x8","eng","engine",["box",17,1,6],[-6,37.5,0],0xaaaaaa,{oem:[pn("F57Z-6564-A","Valve rocker arm (Ranger 2.3L/2.5L)","C","fpdEng")]});
P("lifters","Hydraulic lash adjusters x8","eng","engine",["box",17,1,2],[-6,34.5,2],0x999999,{oem:[pn("F67Z-6500-AA","Tappet (Bronco II, Ranger)","C","fpdEng")]});
P("vIn","Intake valves x4","eng","engine",["box",16,2,0.6],[-6,33.5,-2],0xeeeeee,{oem:[pn("F77Z-6507-AA","Valve - inlet (Ranger)","C","fpdEng")],tips:[{t:"F57Z-6507-A is marked 2.5L - don't order for 2.3L without VIN check.",src:"fpdEng"}]});
P("vEx","Exhaust valves x4","eng","engine",["box",16,2,0.6],[-6,33.5,1],0xddccaa,{oem:[pn("F77Z-6505-AA","Valve - exhaust (Ranger)","C","fpdEng"),pn("F57Z-6571-A","Valve stem seal, exhaust, 2.3L (qty 8)","V","fpdEng"),pn("F1AZ-6518-A","Valve keeper (notes conflict 2.3L/2.5L)","C","fpdEng")]});
P("pistons","Pistons x4","eng","engine",["box",16,3.5,3.8],[-6,28,0],0xcccccc,{oem:[pn("F57Z-6108-AA","Piston & pin assy, 2.3L","V","fpdEng"),pn("F67Z-6148-AA","Piston ring kit, 2.3L","V","fpdEng")],dim:{t:"Bore 3.780 in (96.0 mm) nominal.",st:"C",src:"trs4"}});
P("rods","Connecting rods x4","eng","engine",["box",16,5,1],[-6,23,0],0x888888,{oem:[pn("F87Z-6200-BA","Connecting rod (page shows 2.3L and 2.5L notes)","C","fpdEng"),pn("D7FZ-6211-A","Rod bearing, 2.3L","V","fpdEng")],bolts:{d:"Rod cap nuts (2 per rod)",sp:"25-30 ft-lb, then 30-36 ft-lb final. Side clearance 0.0035-0.0115 in.",st:"V",src:"charmAsm",n:8}});
P("crank","Crankshaft","eng","engine",["cyl",1.2,20,"x"],[-6,20,0],0xb0b0b0,{oem:[pn("F57Z-6303-A","Crankshaft assy, 2.3L","V","fpdEng"),pn("XW7Z-6D309-BDA","Main bearing lower No.1,2,4,5 (catalog notes conflict 2.3L/2.5L)","C","fpdEng"),pn("F4AZ-6701-A","Rear main seal, 2.3L","V","fpdEng")],bolts:{d:"Main cap bolts (5 caps)",sp:"50-60 ft-lb, then 75-85 ft-lb (manual text also shows 80-90 at final step - confirm in your manual)",st:"C",src:"charmAsm",n:10},dim:{t:"Stroke 3.126 in (79.4 mm).",st:"C",src:"trs4"}});
P("auxshaft","Auxiliary (jack) shaft","eng","engine",["cyl",0.7,16,"x"],[-6,24,-4],0xa0a0a0,{oem:[pn("F77Z-6A618-BA","Intermediate shaft (Ranger)","C","fpdEng")]});
P("timingbelt","Timing belt","eng","engine",["box",1,16,6],[6,30,0],0x111111,{oem:[pn("F57Z-6268-A","Timing belt, 2.3L, from 1/13/92","V","fpdEng"),pn("F57Z-6K254-A","Timing belt tensioner (Ranger)","C","fpdEng"),pn("F1ZZ-6306-A","Crank sprocket, 2.3L from 1/13/92","V","fpdEng")],am:[pn("Gates TCK276","Timing belt kit","V","raTB"),pn("Dayco 95276K1","Belt + tensioner kit","V","raTB"),pn("Dayco WP276K1A","Kit incl. water pump (1995-2001 Ranger)","V","dayco"),pn("Cloyes BK276 / Continental TB276K1","Kits","V","raTB")],tips:[{t:"Timing belt failure/skip is a known 2.3L issue - replace on schedule (~80k mi per forum summary).",src:"trs4"},{t:"While in there: front cam, aux and crank seals.",src:"trs4"}]});
P("frontcover","Timing belt covers / front cover","eng","engine",["box",1,14,9],[7.2,30,0],0x303030,{oem:[pn("F57Z-6020-A","Front cover gasket (notes conflict 2.3L/2.5L)","C","fpdEng"),pn("5H2Z-6700-AA","Front crank seal (Ranger)","C","fpdEng")]});
P("crankpulley","Crank pulley / damper","eng","engine",["cyl",3.5,1.5,"x"],[8,20,0],0x555555,{oem:[pn("F87Z-6312-AA","Damper (page note '2.5L') - confirm","C","fpdEng")],bolts:{d:"Crank pulley hub bolt",sp:"92-121 ft-lb (125-165 Nm)",st:"V",src:"wsm",n:1}});
P("oilpan","Oil pan","eng","engine",["box",20,5,9],[-6,16,0],0x3a3a3a,{oem:[pn("F57Z-6675-FA","Oil pan, 2.3L","V","fpdEng"),pn("F57Z-6710-A","Oil pan gasket, 2.3L","V","fpdEng")],bolts:{d:"Pan bolts",sp:"unverified",st:"U",n:8}});
P("oilpump","Oil pump + pickup","eng","engine",["box",4,4,3],[-2,18,-3],0x777777,{oem:[pn("F77Z-6600-AB","Oil pump (page note 2.5L) - confirm","C","fpdEng"),pn("F0TZ-6622-A","Oil pickup tube (Ranger)","C","fpdEng")]});
P("oilfilter","Oil filter","eng","engine",["cyl",1.8,4.5,"z"],[-3,22,-7.5],0x1c4fb8,{oem:[pn("FL-1-A","Motorcraft oil filter (= D9AZ-6731-A)","V","opoEng")],bolts:{d:"Oil filter mounting insert",sp:"20-25 ft-lb (28-35 Nm)",st:"V",src:"charmAsm",n:1}});
P("flex","Flexplate","trans","engine",["cyl",6,0.4,"x"],[-16.5,22,0],0x999999,{bolts:{d:"Flexplate-to-crank bolts",sp:"56-64 ft-lb, cross pattern",st:"V",src:"charmFly",n:6}});
P("mountR","Engine support bracket (RH)","eng","engine",["box",4,4,2],[-4,22,6.5],0x444444,{bolts:{d:"RH front engine support bracket bolts",sp:"44-59 ft-lb (60-80 Nm)",st:"V",src:"charmAsm",n:3}});
// ---------- ACCESSORIES ----------
P("alt","Alternator","acc","engine",["cyl",3,5,"x"],[6,30,-7],0x9a9a9a,{oem:[pn("GL-8727-RM / F6UZ-10346-VARM3","Reman 130A - shown on catalog, stock 2.3L amperage not confirmed","U","opoAlt")],am:[pn("see RockAuto list","Match amp rating on your tag","U","raAlt")],tips:[{t:"Read the amp rating on your alternator's tag before ordering; catalog listing does not confirm 2.3L stock amperage.",src:"opoAlt"}]});
P("ps","Power steering pump","acc","engine",["cyl",2.5,4,"x"],[6,33,7],0x8a8a8a,{oem:[pn("(not researched yet)","","U")]});
P("ac","A/C compressor","acc","engine",["cyl",3,6,"x"],[5,20,-8],0x8a8a8a,{oem:[pn("(not researched yet)","","U")]});
P("belt","Serpentine belt","acc","engine",["box",0.5,15,1],[9,27,0],0x111111,{oem:[pn("F57Z-8620-F","2.3L, power steering, WITH A/C","V","opoWP"),pn("F57Z-8620-E","2.3L, power steering, without A/C","V","opoWP"),pn("F57Z-8620-D","2.3L, manual steering","V","opoWP"),pn("F87Z-6B209-CA","Belt tensioner 2.3L/2.5L","V","fpdWP")],tips:[{t:"Three different belts depending on A/C and power steering - pick the one matching your truck.",src:"opoWP"}]});
P("starter","Starter motor","elec","engine",["cyl",2.2,7,"x"],[-15,18,6],0x555555,{oem:[pn("SA-857-RM / F87Z-11002-AARM","Reman starter, 2.3L Ranger (stamped F87U-11000-A1A)","V","opoSt")],tips:[{t:"Catalog note 'From 03/01/1997' - check your build date on the door sticker.",src:"opoSt"}]});
// ---------- COOLING ----------
P("rad","Radiator","cool","front",["box",2,18,26],[17,32,0],0x7a6a40,{oem:[pn("F57Z-8005-CA","Radiator, Ranger 2.3L","V","opoWP"),pn("RS-62 / E5TZ-8100-A","Radiator cap","V","opoWP")]});
P("hoseU","Upper radiator hose","cool","front",["cyl",0.8,10,"x"],[12,37,-2],0x111111,{oem:[pn("F67Z-8260-HA","Upper hose 2.3L (supersedes F57Z-8260-B)","V","opoWP")],dim:{t:"Package dims for F57Z-8260-B: 4.0 x 4.4 x 17.5 in, 1.1 lb (box, not hose length).",st:"V",src:"fpgHose"},tips:[{t:"F57Z-8260-D is the 3.0L hose - don't order that one.",src:"fpgHose"}]});
P("hoseL","Lower radiator hose","cool","front",["cyl",0.8,10,"x"],[12,24,2],0x111111,{oem:[pn("F57Z-8286-A","Lower hose 2.3L","V","fpgHose")],dim:{t:"Package dims 2.8 x 5.3 x 11.2 in, 1.9 lb.",st:"V",src:"fpgHose"},tips:[{t:"Gates 25477 is listed for 4.0L 1995-97, not 2.3L - avoid.",src:"fpgHose"}]});
P("heaterhose","Heater hoses (supply/return)","cool","engine",["cyl",0.4,20,"x"],[-12,32,7],0x111111,{oem:[pn("(not researched yet)","","U")]});
P("wp","Water pump","cool","engine",["cyl",2.5,2.5,"x"],[7.5,26,3],0x9a9a9a,{oem:[pn("PW-397 / XL5Z-8501-CA","Water pump 2.3L/2.5L","V","opoWP"),pn("F57Z-8507-CC","Water pump gasket 2.3L","V","fpdWP"),pn("F87Z-8509-AB","Water pump pulley 2.3L","V","fpdWP")],am:[pn("Dayco WP276K1A","Timing kit with pump","V","dayco")]});
P("tstat","Thermostat + housing","cool","engine",["cyl",1.3,2,"y"],[2,40,-4],0x9a9a9a,{oem:[pn("KU2Z-8575-A","Thermostat, Ranger 2.3L","V","fpdWP"),pn("F57Z-8592-AB","Water outlet (housing), 2.3L","V","fpdWP")]});
P("fan","Cooling fan / clutch","cool","engine",["cyl",8,2,"x"],[14,30,0],0x222222,{oem:[pn("(not researched yet)","","U")]});
// ---------- FUEL / INTAKE / EXHAUST ----------
P("intakeU","Upper intake manifold","intk","engine",["box",14,5,6],[-8,38,-9],0x8f8f8f,{oem:[pn("(2.3L gasket # not confirmed)","F57Z-9H486-C on catalog page is 2.5L - avoid","U","opoEng")]});
P("intakeL","Lower intake manifold","intk","engine",["box",16,4,4],[-6,33,-7],0x8f8f8f,{bolts:{d:"Lower intake nuts/bolts (studs front-lower & rear-lower)",sp:"19-28 ft-lb (26-38 Nm) in sequence",st:"V",src:"charmAsm",n:6}});
P("airfilter","Air filter + box","intk","front",["box",8,4,10],[4,40,-14],0x222222,{oem:[pn("FA-1616","Motorcraft air filter, 1995-97 Ranger 2.3L","V","pgAir")]});
P("exman","Exhaust manifold","intk","engine",["box",16,4,3],[-6,30,7.5],0x6b4a35,{bolts:{d:"Exhaust manifold bolts (studs in holes 5 & 7)",sp:"15-22 ft-lb, then 45-59 ft-lb in sequence (as printed in manual)",st:"V",src:"charmAsm",n:8}});
P("exhaust","Exhaust pipe / cat / muffler","intk","chassis",["cyl",1.2,110,"x"],[-60,14,10],0x555555,{oem:[pn("(not researched yet)","","U")]});
P("injectors","Fuel injectors x4","fuel","engine",["box",14,2,1],[-6,35,-6],0x333399,{oem:[pn("CM-4779 / F47Z-9F593-A","Motorcraft injector, 1995-97 Ranger (search listing)","C","inj")]});
P("fuelfilter","Fuel filter (frame rail)","fuel","chassis",["cyl",1.2,6,"x"],[-80,18,-15],0xcccc33,{oem:[pn("FG-872","Motorcraft fuel filter (search summary)","C","orFuel")]});
P("tank","Fuel tank + in-tank pump","fuel","chassis",["box",30,10,22],[-80,16,0],0x2a2a2a,{oem:[pn("(pump # not confirmed)","","U")]});
// ---------- ELECTRICAL / IGNITION ----------
P("plugs","Spark plugs x8 (dual plug)","elec","engine",["box",16,1,14],[-6,33,0],0xe0e0e0,{oem:[pn("AGSF-32F-MX","Motorcraft plug, supersedes AWSF-32F, qty 8","V","fpdEng"),pn("SP-432X","Motorcraft platinum, gap .044, 2 per cyl","V","raPlug")],bolts:{d:"Spark plug",sp:"5-10 ft-lb (7-14 Nm); gap 1.00-1.15 mm",st:"C",src:"ajuste",n:0},tips:[{t:"2.3L needs 8 plugs (two per cylinder). One dead plug can be masked by its twin.",src:"raPlug"}]});
P("wires","Spark plug wire set","elec","engine",["box",14,0.5,14],[-6,37,0],0x2050c0,{oem:[pn("WR-4089 / F3PZ-12259-B","Wire set, Ranger 2.3L/2.5L","V","opoIgn")]});
P("coil","Ignition coil pack(s)","elec","engine",["box",4,3,4],[-10,38,9],0x111111,{oem:[pn("DG-530","Motorcraft coil, lists Ranger 2.3L","V","opoIgn"),pn("1U2Z-12A297-AB","Ignition module (Ranger 2.3L w/EEC)","C","opoIgn")],tips:[{t:"Test: unplug one coil pack connector while running; a big miss points to plugs/wires on the other side.",src:"trsCoil"}]});
P("o2","Oxygen sensor","elec","engine",["cyl",0.5,3,"y"],[-12,30,10],0xbbbbbb,{oem:[pn("DY-959","Motorcraft sensor listed for Ranger 2.3L w/EEC","C","opoIgn")]});
P("battery","Battery","elec","front",["box",7,8,10],[8,36,18],0x222222,{oem:[pn("(not researched yet)","","U")]});
// ---------- TRANSMISSION ----------
P("trans","4R44E automatic transmission","trans","trans",["box",28,12,12],[-32,22,0],0x8899aa,{oem:[pn("F77Z-7000-GARM","Reman trans assy 'Asy# 97GT-GCA, 2.3L 4x2'","C","fpgTrans")],dim:{t:"4-speed: 1st 2.47, 2nd 1.47, 3rd 1.00, 4th 0.75. Door-sticker TRANS code 'V' = 4R44E.",st:"V",src:"trsTrans"},tips:[{t:"1997 2.3L auto = 4R44E (code V). Some listings say 5R55E for 1997 - that's the 4.0L. Check your door sticker.",src:"trsA4"},{t:"An auxiliary trans cooler helps longevity on this family (A4LD/4R44E); keep fluid under ~200F.",src:"trsTrans"}]});
P("converter","Torque converter","trans","trans",["cyl",5.5,4,"x"],[-19,22,0],0x777777,{oem:[pn("(not researched yet)","","U")]});
P("tpan","Transmission pan (16 bolt)","trans","trans",["box",14,2,10],[-34,15,0],0x666666,{dim:{t:"16-bolt pan (4R44E/4R55E).",st:"V",src:"trsTrans"},bolts:{d:"Pan bolts x16",sp:"unverified",st:"U",n:16}});
// ---------- SUSPENSION / DRIVELINE ----------
P("dshaft","Driveshaft","susp","chassis",["cyl",1.5,58,"x"],[-75,17,0],0x999999,{});
P("raxle","Rear axle (Ford 7.5 in - unverified)","susp","chassis",["cyl",1.6,58,"z"],[-107.9,14,0],0x555555,{dim:{t:"Axle model/ratio: unverified - read the axle tag.",st:"U"}});
P("ttb","Front Twin I-Beam / TTB suspension","susp","chassis",["box",4,3,56],[0,14,0],0x444444,{dim:{t:"2WD Twin I-Beam (1983-97). Specs unverified.",st:"U"}});
P("springs","Rear leaf springs","susp","chassis",["box",50,2,3],[-108,17,-17],0x444444,{});
P("shocks","Shock absorbers","susp","chassis",["cyl",1,12,"y"],[-100,20,17],0xcccc00,{});
for(const [id,n,x,z] of [["wFL","Wheel/tire FL",0,-29],["wFR","Wheel/tire FR",0,29],["wRL","Wheel/tire RL",-107.9,-29],["wRR","Wheel/tire RR",-107.9,29]])
 P(id,n,"susp","wheels",["cyl",13.5,8,"z"],[x,13.5,z],0x1a1a1a,{bolts:{d:"Lug nuts 1/2-20 x5",sp:"100 ft-lb (135 Nm)",st:"C",src:"lug",n:5}});
// ---------- BRAKES ----------
P("rotorL","Front rotor/hub L","brake","wheels",["cyl",5.5,1,"z"],[0,13.5,-24],0x888888,{oem:[pn("BRRC-1233 / BRRC-100","Depends on 14 vs 15 in wheels & ABS (search summary)","U","aa")],bolts:{d:"Caliper",sp:"Slide bolts ~12-15 ft-lb; bracket ~80 ft-lb (search summary)",st:"U",src:"aa",n:2}});
P("rotorR","Front rotor/hub R","brake","wheels",["cyl",5.5,1,"z"],[0,13.5,24],0x888888,{oem:[pn("BRRC-1233 / BRRC-100","Depends on wheels & ABS","U","aa")]});
P("drums","Rear drums/shoes","brake","wheels",["cyl",5,2,"z"],[-107.9,13.5,-24],0x666666,{oem:[pn("(confirm by VIN)","","U")]});
P("mc","Master cylinder / booster","brake","body",["cyl",3.5,6,"x"],[-24,42,-18],0x444444,{oem:[pn("(not researched yet)","","U")]});
