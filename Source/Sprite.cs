namespace Sandbox.Source {

    public class Sprite {


        public int x { get; set; }
        public int y { get; set; }

        public string Markup { get; set; }


        public Sprite(int startX, int startY) {

            x = startX;
            y = startY;

            Markup = "";
        }

        

    }
}