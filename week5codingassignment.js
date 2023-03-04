// Bands and musicians
class Musician { // created class for musicians

    constructor(name, instrument) { // used constructor keyword to set objects for the Musician class
    this.name = name; // this used to refer to the name object of the constructor
    this.instrument = instrument; // used this to refer to instrument object of constructor

    }

    describe() {

        return `${this.name} plays ${this.instrument}`; // returns the musician name and instrument played in a string using template literal

    }

}

class Band { // created class for band

    constructor(name) { // one object name

        this.name = name; // this refers to the name of the object for the specific class Band
        this.musicians = []; // creates empty array to hold musicians associated with this specific band

    }

    addMusician(musician) {  // function to add a musician to band

        if (musician instanceof Musician) { // checks the type of object and returns true if the object is an instance of the class

            this.musicians.push(musician); // push method to add the musician

        } else {

            throw new Error(`You can only add an instance of a musician.
            Argument is not a musician: ${musician}`); // handles prompt if not a object of the class band

        }
    }

    describe() {

        return `${this.name} has ${this.musicians.length} musicians.`; // template literal to using return to print the name and number of musicians in the band class
        
    }
}

class Menu { // creates a class for the menu

    constructor() { // constructor set to empty

        this.bands = []; // creates an array for bands
        this.selectedBand = null; // sets selected band to null to start with

    }

    start() {

        let selection = this.showMainMenuOptions(); // create main menu
        while (selection != 0) {

            switch(selection) { // using switch to create selections for user
                case `1` :
                    this.createBand();
                    break;
                case `2` :
                    this.viewBand();
                    break;
                case `3` :
                    this.deleteBand();
                    break;
                case `4` :
                    this.displayBands();
                    break;
                default:
                    selection = 0;
                }
            selection = this.showMainMenuOptions();   

        }
        alert(`Asta La Vista, Baby!`); // defaults to exit

    }

    showMainMenuOptions() { // creates function to prompt user to select an option
        return prompt(` 
        0) exit
        1) create a new band
        2) view a band
        3) delete a band
        4) diplay all bands
        `); // template literal to display options
    }

    showBandMenuOptions(bandInfo) { // same as main menu but for band info, adding and deleting musicians

        return prompt(`
        0) back
        1) add a new musician
        2) delete a musician
        
        ${bandInfo}
        `);

    }

    displayBands() { // function to display bands

        let bandString = '';
        for (let i = 0; i < this.bands.length; i++) {
            bandString += i+ `) ` + this.bands[i].name + `\n`;
        }
        alert (bandString);
    }

    createBand() { // function to create a new band
        let name = prompt(`Enter new band name: `);
        this.bands.push(new Band(name));
    }

    viewBand() { // function to view a band
        let index = prompt('Enterh index of the band you want to see:');
        if (index > -1 && index < this.bands.length) {
            this.selectedBand = this.bands[index];
            let description = `Band Name: ` + this.selectedBand.name + `\n`;
            description += ` ` + this.selectedBand.describe() + `\n`;
            for (let i = 0; i < this.selectedBand.musicians.length; i++) {
                description += i + `) ` + this.selectedBand.musicians[i].describe() + `\n`;
            }
            let selection1 = this.showBandMenuOptions(description);
            switch (selection1) {
                case `1` :
                this.createMusician();
                break;
                case `2` :
                this.deleteMusician();
    
            }
        }
    }

    deleteBand() { // deletes a band

        let index = prompt(`Enter the index of the band you wand to delete: `);
        if (index > -1 && index < this.bands.length) {
            this.bands.splice(index,1);
        }
    }

    createMusician() { // creates a musician in and adds to the selected band
        let name = prompt(`Enter musician's name: `);
        let instrument = prompt(`Enter the instrument played by musician: `);
        this.selectedBand.musicians.push(new Musician(name,instrument));
        
    }

    deleteMusician() { // deletes a musician from selected band
        let index = prompt('Enter the index of the musician to be deleted: ');
        if (index > -1 && index < this.selectedBand.musicians.length) {
            this.selectedBand.musicians.splice(index,1);

        }


    }
}
let menu = new Menu(); // variable for menu
menu.start(); // starts menu app
