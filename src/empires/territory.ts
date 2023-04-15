import { Struct, u256 } from "snarkyjs";

class Territory extends Struct({
  operator: u256,
  player: u256,
  troops: u256,
}) {
  send_troops(country_addr: u256, amount_troops: u256) {
    // Send troops to another country
  }

  set_player(user_addr: u256) {
    // Set the player who owns this territory
  }
}
