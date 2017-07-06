#include "shapes.inc"
#include "colors.inc"

camera{
  location <0,30,-40>
  look_at <0,2,0>
  angle 30
}

light_source{ <15,0,-15> color White}
light_source{ <0,15,0> color White}
light_source{ <-8,15,0> color White} 
#declare y1 = 13;
difference{
	union{
		intersection{
			object{Cube scale<2.0, y1, 1.0> }
			object{Cube scale<2.0, y1, 1.0> rotate y*60}
			object{Cube scale<2.0, y1, 1.0> rotate y*120}
			pigment{color Green}
		}
		union{
			intersection{
				object{Cube scale<2.0, y1+0.001, 1.0> }
				object{Cube scale<2.0, y1+0.001, 1.0> rotate y*60}
				object{Cube scale<2.0, y1+0.001, 1.0> rotate y*120}
				
				pigment{color MediumWood}
			}
			cylinder{<0, 0, 0>,<0, -y1-0.02,0>,0.3 }
			translate<0,-0.001,0>
		}
	}
	difference{
		cylinder{<0,y1-7.0,0>,<0,y1+0.001,0>,1.5}
		union{
			cone{<0,y1-7,0>,1.5,<0,y1+0.001,0>,0 pigment{color MediumWood}}
			cone{<0,y1-(7/3),0>,1.355/3+0.05,<0,y1+0.001,0>,0 pigment{color Black}}
		}
	}
	rotate z*150
	rotate y*20
}
background{color White}