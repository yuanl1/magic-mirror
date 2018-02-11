package mirror;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCommandRequest {

  public final String command;

  @JsonCreator
  PostCommandRequest(@JsonProperty("command") String command) {
    this.command = command;
  }

}
