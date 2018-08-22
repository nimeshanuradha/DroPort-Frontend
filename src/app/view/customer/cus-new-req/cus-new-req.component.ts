import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestService } from "../../../services/request.service";
import { DroneService } from '../../../services/drone.service';


@Component({
  selector: 'app-cus-new-req',
  templateUrl: './cus-new-req.component.html',
  styleUrls: ['./cus-new-req.component.css']
})

export class CusNewReqComponent implements OnInit {
  ngOnInit(){
    // this.droneService.getAll_Drones().subscribe(res => {
    //   console.log(res);
    //   this.all_drone_arr = res
    // })
  }
  
  constructor(
    private RequestService: RequestService, 
    private droneService: DroneService
  ) { }

  // Variables
  all_drone_arr = []
  dro_id
  selected_drn
  selected_brand

  // Getting form data and posting new request
  get_req_data(cus_new_req: NgForm) {
    var req_data = cus_new_req.value
    var cus_id = localStorage.getItem("user_id")
    var new_req_data = Object.assign(req_data,{cus_id:cus_id})
    console.log(cus_id,new_req_data);
    
   
   this.RequestService.post_NewRequest(req_data).subscribe(res => console.log("Successfully added"))
  }
  // Filtering Drones
  get_drones(video_resolution, megapixels, max_flight_time) {
   
    let drone_data = {video_resolution, megapixels, max_flight_time}
    console.log("get drones called",drone_data );
    this.droneService.get_Drones_combined(drone_data).subscribe(res => {
      console.log(res);
      this.all_drone_arr = res
    })
  }
  // Set and Confirm Drone Selection
  set_drone(dro_id, dro_brand) {
    this.selected_drn = dro_id
    this.selected_brand = dro_brand
  }

  conf_dron(selected_drn) {
    this.dro_id = selected_drn
  }

  // Town lists for district
  populate(s1, s2) {
    s1 = document.getElementById(s1);
    s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if (s1.value == "Ampara") {
      var optionArray = ["|Select Your Town", "Akkarepattu|Akkarepattu", "Ampara|Ampara", "Kalmunai|Kalmunai",
        "Sainthamaruthu|Sainthamaruthu", "Dehiattakandiya|Dehiattakandiya", "Padiyathalawa|Padiyathalawa",
        "Mahaoya|Mahaoya", "Uhana|Uhana", "Navithanveli|Navithanveli", "Sammanthurai|Sammanthurai"
        , "Kalmunai (Tamil)|Kalmunai (Tamil)", "Karaitheevu|Karaitheevu", "Ninthavur|Ninthavur"
        , "Addalaichenai|Addalaichenai", "Irakkamam|Irakkamam", "Alayadiwembu|Alayadiwembu", "Damana|Damana", "Thirukkovil|Thirukkovil"
        , "Pothuvil|Pothuvil", "Lahugala|Lahugala"];
    }
    else if (s1.value == "Anuradhapura") {
      var optionArray = ["|Select Your Town", "Anuradhapura|Anuradhapura", "Eppawala|Eppawala", "Galenbindunuwewa|Galenbindunuwewa",
        "Galnewa|Galnewa", "Habarana|Habarana", "Horowpothana|Horowpothana", "Kekirawa|Kekirawa", "Medawachchiya|Medawachchiya",
        "Mihintale|Mihintale", "Nochchiyagama|Nochchiyagama", "Talawa|Talawa", "Ipalogama|Ipalogama", "Kahatagasdigiliya|Kahatagasdigiliya"
        , "Kebithigollewa|Kebithigollewa", "Nachchadoowa|Nachchadoowa", "Padaviya|Padaviya", "Palagala|Palagala", "Palugaswewa|Palugaswewa",
        "Rajanganaya|Rajanganaya", "Rambewa|Rambewa", "Thirappane|Thirappane", "Tambuttegama|Tambuttegama"];
    }
    else if (s1.value == "Badulla") {
      var optionArray = ["|Select Your Town", "Badulla|Badulla", "Bandarawela|Bandarawela", "Bandarawela|Bandarawela",
        "Welimada|Welimada", "Mahiyanganaya|Mahiyanganaya", "Hali Ela|Hali Ela", "Diyatalawa|Diyatalawa", "Ella|Ella",
        "Haputale|Haputale", "Passara|Passara", "Soranathota|Soranathota", "Meegahakivula|Meegahakivula", "Kandaketiya|Kandaketiya"
        , "Lunugala|Lunugala", "Rideemaliyadda|Rideemaliyadda", "Haldummulla|Haldummulla"];
    }
    else if (s1.value == "Batticaloa") {
      var optionArray = ["|Select Your Town", "Batticaloa|Batticaloa", "Eravur Pattu|Eravur Pattu", "Eravur Town|Eravur Town", "Kattankudy|Kattankudy",
        "Koralai Pattu|Koralai Pattu", "Manmunai|Manmunai", "Porativu Pattu|Porativu Pattu"];
    }
    else if (s1.value == "Colombo") {
      var optionArray = ["|Select Your Town", "Nugegoda|Nugegoda", "Dehiwala|Dehiwala", "Piliyandala|Piliyandala",
        "Maharagama|Maharagama", "Kottawa|Kottawa", "Angoda|Angoda", "Athurugiriya|Athurugiriya", "Avissawella|Avissawella",
        "Battaramulla|Battaramulla", "Boralesgamuwa|Boralesgamuwa", "Colombo 1|Colombo 1", "Colombo 2|Colombo 2",
        "Colombo 3|Colombo 3", "Colombo 4|Colombo 4", "Colombo 5|Colombo 5", "Colombo 6|Colombo 6", "Colombo 7|Colombo 7",
        "Colombo 8|Colombo 8", "Colombo 9|Colombo 9", "Colombo 10|Colombo 10", "Colombo 11|Colombo 11", "Colombo 12|Colombo 12",
        "Colombo 13|Colombo 13", "Colombo 14|Colombo 14", "Colombo 15|Colombo 15", "Hanwella|Hanwella", "Homagama|Homagama",
        "Kaduwela|Kaduwela", "Kesbewa|Kesbewa", "Kohuwala|Kohuwala", "Kolonnawa|Kolonnawa", "Kotte|Kotte",
        "Malabe|Malabe", "Moratuwa|Moratuwa", "Mount|Mount", "Nawala|Nawala", "Padukka|Padukka",
        "Pannipitiya|Pannipitiya", "Rajagiriya|Rajagiriya", "Ratmalana|Ratmalana", "Talawatugoda|Talawatugoda", "Wellampitiya|Wellampitiya"];
    }
    else if (s1.value == "Galle") {
      var optionArray = ["|Select Your Town", "Galle|Galle", "Ambalangoda|Ambalangoda", "Elpitiya|Elpitiya",
        "Hikkaduwa|Hikkaduwa", "Baddegama|Baddegama", "Ahangama|Ahangama", "Batapola|Batapola", "Bentota|Bentota",
        "Karapitiya|Karapitiya", "Akmeemana|Akmeemana", "Balapitiya|Balapitiya", "Elpitiya|Elpitiya",
        "Gonapinuwala|Gonapinuwala", "Habaraduwa|Habaraduwa", "Imaduwa|Imaduwa", "Karandeniya|Karandeniya", "Nagoda|Nagoda",
        "Neluwa|Neluwa", "Niyagama|Niyagama", "Thawalama|Thawalama", "Yakkalamulla|Yakkalamulla"];
    }
    else if (s1.value == "Gampaha") {
      var optionArray = ["|Select Your Town", "Gampaha|Gampaha", "Negombo|Negombo", "Kelaniya|Kelaniya",
        "Kiribathgoda|Kiribathgoda", "Kadawatha|Kadawatha", "Delgoda|Delgoda", "Divulapitiya|Divulapitiya", "Ganemulla|Ganemulla",
        "Ja-Ela|Ja-Ela", "Kandana|Kandana", "Katunayake|Katunayake", "Minuwangoda|Minuwangoda", "Mirigama|Mirigama"
        , "Nittambuwa|Nittambuwa", "Ragama|Ragama", "Veyangoda|Veyangoda", "Wattala|Wattala", "Dompe|Dompe",
        "Mahara|Mahara"];
    }
    else if (s1.value == "Hambantota") {
      var optionArray = ["|Select Your Town", "Hambantota|Hambantota", "Tangalla|Tangalla", "Beliatta|Beliatta", "Ambalantota|Ambalantota",
        "Tissamaharama|Tissamaharama", "Ambalantota|Ambalantota", "Angunakolapelessa|Angunakolapelessa", "Katuwana|Katuwana",
        "Lunugamvehera|Lunugamvehera", "Okewela|Okewela", "Sooriyawewa|Sooriyawewa", "Walasmulla|Walasmulla", "Weeraketiya|Weeraketiya"];
    }
    else if (s1.value == "Jaffna") {
      var optionArray = ["|Select Your Town", "Jaffna|Jaffna", "Nallur|Nallur", "Chavakachcheri|Chavakachcheri",
        "Delft|Delft", "Karainagar|Karainagar", "Maruthnkerny|Maruthnkerny", "Point Pedro|Point Pedro", "Karaveddy|Karaveddy",
        "Kopay|Kopay", "Tellippalai|Tellippalai", "Uduvil|Uduvil", "Sandilipay|Sandilipay", "Chankanai|Chankanai"];
    }
    else if (s1.value == "Kalutara") {
      var optionArray = ["|Select Your Town", "Kalutara|Kalutara", "Horana|Horana", "Panadura|Panadura",
        "Bandaragama|Bandaragama", "Matugama|Matugama", "Alutgama|Alutgama", "Beruwala|Beruwala", "Ingiriya|Ingiriya",
        "Wadduwa|Wadduwa", "Agalawatta|Agalawatta", "Bulathsinhala|Bulathsinhala", "Dodangoda|Dodangoda", "Madurawela|Madurawela"
        , "Millaniya|Millaniya", "Palindanuwara|Palindanuwara", "Walallavita|Walallavita"];
    }
    else if (s1.value == "Kandy") {
      var optionArray = ["|Select Your Town", "Kandy|Kandy", "Katugastota|Katugastota", "Peradeniya|Peradeniya",
        "Gampola|Gampola", "Kundasale|Kundasale", "Akurana|Akurana", "Ampitiya|Ampitiya", "Digana|Digana",
        "Galagedara|Galagedara", "Gelioya|Gelioya", "Kadugannawa|Kadugannawa", "Madawala Bazaar|Madawala Bazaar", "Nawalapitiya|Nawalapitiya"
        , "Pilimatalawa|Pilimatalawa", "Wattegama|Wattegama", "Harispattuwa|Harispattuwa", "Panvila|Panvila", "Minipe|Minipe",
        "Delthota|Delthota", "Hatharaliyadda|Hatharaliyadda", "Thumpane|Thumpane", "Minipe|Minipe"];
    }
    else if (s1.value == "Kegalla") {
      var optionArray = ["|Select Your Town", "Kegalle|Kegalle", "Mawanella|Mawanella", "Warakapola|Warakapola",
        "Rambukkana|Rambukkana", "Ruwanwella|Ruwanwella", "Dehiowita|Dehiowita", "Deraniyagala|Deraniyagala", "Galigamuwa|Galigamuwa",
        "Kitulgala|Kitulgala", "Yatiyantota|Yatiyantota", "Aranayaka|Aranayaka", "Bulathkohupitiya|Bulathkohupitiya"];
    }
    else if (s1.value == "Kilinochchi") {
      var optionArray = ["|Select Your Town", "Kilinochchi|Kilinochchi", "Kandavalai|Kandavalai", "Karachchi|Karachchi",
        "Pachchilaipalli|Pachchilaipalli", "Poonakary|Poonakary"];
    }
    else if (s1.value == "Kurunegala") {
      var optionArray = ["|Select Your Town", "Kurunegala|Kurunegala", "Kuliyapitiya|Kuliyapitiya", "Pannala|Pannala",
        "Pannala|Pannala", "Narammala|Narammala", "Wariyapola|Wariyapola", "Alawwa|Alawwa", "Bingiriya|Bingiriya",
        "Galgamuwa|Galgamuwa", "Giriulla|Giriulla", "Hettipola|Hettipola", "Ibbagamuwa|Ibbagamuwa", "Mawathagama|Mawathagama"
        , "Nikaweratiya|Nikaweratiya", "Polgahawela|Polgahawela", "Ambanpola|Ambanpola", "Bamunakotuwa|Bamunakotuwa", "Ganewatta|Ganewatta",
        "Kobeigane|Kobeigane", "Giribawa|Giribawa", "Polpithigama|Polpithigama", "Weerambugedara|Weerambugedara"];
    }
    else if (s1.value == "Mannar") {
      var optionArray = ["|Select Your Town", "Mannar|Mannar", "Madhu|Madhu", "Manthai|Manthai", "Musalai|Musalai",
        "Nanaddan|Nanaddan"];
    }
    else if (s1.value == "Matale") {
      var optionArray = ["|Select Your Town", "Matale|Matale", "Dambulla|Dambulla", "Galewela|Galewela",
        "Pallepola|Pallepola", "Sigiriya|Sigiriya", "Yatawatta|Yatawatta", "Rattota|Rattota", "Naula|Naula",
        "Ukuwela|Ukuwela", "Wilgamuwa|Wilgamuwa", "Palapathwela|Palapathwela"];
    }
    else if (s1.value == "Matara") {
      var optionArray = ["|Select Your Town", "Matara|Matara", "Akuressa|Akuressa", "Weligama|Weligama",
        "Hakmana|Hakmana", "Dikwella|Dikwella", "Devinuwara|Devinuwara", "Athuraliya|Athuraliya", "Kamburupitiya|Kamburupitiya",
        "Kotapola|Kotapola", "Malimbada|Malimbada", "Pasgoda|Pasgoda", "Pitabeddara|Pitabeddara", "Thihagoda|Thihagoda"
        , "Welipitiya|Welipitiya"];
    }
    else if (s1.value == "Moneragala") {
      var optionArray = ["|Select Your Town", "Moneragala|Moneragala", "Bibile|Bibile", "Kataragama|Kataragama",
        "Wellawaya|Wellawaya", "Buttala|Buttala", "Bibile|Bibile", "Badalkumbura|Badalkumbura", "Katharagama|Katharagama",
        "Madulla|Madulla", "Medagama|Medagama", "Sevanagala|Sevanagala", "Siyambalanduwa|Siyambalanduwa", "Thanamalvila|Thanamalvila"
        , "Wellawaya|Wellawaya"];
    }
    else if (s1.value == "Mullaitivu") {
      var optionArray = ["|Select Your Town", "Mullaitivu|Mullaitivu", "Pandiyankulam|Pandiyankulam", "Maritimepattu|Maritimepattu",
        "Oddusuddan|Oddusuddan", "Puthukudiyiruppu|Puthukudiyiruppu", "Thunukkai|Thunukkai", "Welioya|Welioya"];
    }
    else if (s1.value == "Nuwara Eliya") {
      var optionArray = ["|Select Your Town", "Nuwara Eliya|Nuwara Eliya", "Hatton|Hatton", "Ginigathena|Ginigathena",
        "Madulla|Madulla", "Walapane|Walapane", "Hanguranketha|Hanguranketha", "Ambagamuwa|Ambagamuwa"];
    }
    else if (s1.value == "Polonnaruwa") {
      var optionArray = ["|Select Your Town", "Polonnaruwa|Polonnaruwa", "Kaduruwela|Kaduruwela", "Hingurakgoda|Hingurakgoda",
        "Medirigiriya|Medirigiriya", "Dimbulagala|Dimbulagala", "Elahera|Elahera", "Lankapura|Lankapura", "Thamankaduwa|Thamankaduwa",
        "Welikanda|Welikanda"];
    }
    else if (s1.value == "Puttalam") {
      var optionArray = ["|Select Your Town", "Puttalam|Puttalam", "Pallama|Pallama", "Chilaw|Chilaw", "Wennappuwa|Wennappuwa",
        "Dankotuwa|Dankotuwa", "Nattandiya|Nattandiya", "Marawila|Marawila", "Anamaduwa|Anamaduwa", "Arachchikattuwa|Arachchikattuwa",
        "Kalpitiya|Kalpitiya", "Madampe|Madampe", "Mahakumbukkadawala|Mahakumbukkadawala", "Mahawewa|Mahawewa", "Mundalama|Mundalama"
        , "Nawagattegama|Nawagattegama", "Pallama|Pallama", "Vanathavilluwa|Vanathavilluwa"];
    }
    else if (s1.value == "Ratnapura") {
      var optionArray = ["|Select Your Town", "Ratnapura|Ratnapura", "Embilipitiya|Embilipitiya", "Balangoda|Balangoda",
        "Pelmadulla|Pelmadulla", "Eheliyagoda|Eheliyagoda", "Kuruwita|Kuruwita", "Ayagama|Ayagama", "Elapattha|Elapattha",
        "Godakawela|Godakawela", "Imbulpe|Imbulpe", "Kahawatta|Kahawatta", "Kalawana|Kalawana", "Kiriella|Kiriella"
        , "Kolonna|Kolonna", "Nivithigala|Nivithigala", "Opanayaka|Opanayaka", "Weligepola|Weligepola"];
    }
    else if (s1.value == "Trincomalee") {
      var optionArray = ["|Select Your Town", "Trincomalee|Trincomalee", "Gomarankadawala|Gomarankadawala", "Kantalai|Kantalai",
        "Kinniya|Kinniya", "Kuchchaveli|Kuchchaveli", "Morawewa|Morawewa", "Muttur|Muttur", "Padavi Sri Pura|Padavi Sri Pura",
        "Seruvila|Seruvila", "Thambalagamuwa|Thambalagamuwa", "Verugal (Echchilampattai)|Verugal (Echchilampattai)"];
    }
    else if (s1.value == "Vavuniya") {
      var optionArray = ["|Select Your Town", "Vavuniya|Vavuniya", "Vengalacheddikulam|Vengalacheddikulam"];
    }

    console.log(optionArray);


    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
    }
  }
















}