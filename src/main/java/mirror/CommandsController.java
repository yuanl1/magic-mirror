package mirror;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class CommandsController {

    private String last_request = "";
    private final List<String> possible_commands = Arrays.asList("weather", "subway", "twitter");
    private long timestamp = 0;

    private class LastCommand {

        private String command;
        private long timestamp;

        public LastCommand(String command, long timestamp) {
            this.command = command;
            this.timestamp = timestamp;
        }

        public String getCommand() {
            return command;
        }

        public long getTimestamp() {
            return timestamp;
        }
    }

    @RequestMapping(value = "/commands", method = RequestMethod.POST)
    public PostCommandRequest commands(@RequestBody PostCommandRequest request) throws IllegalArgumentException {
        if(!possible_commands.contains(request.command)) {
            System.out.println("Command not supported.");
            throw new IllegalArgumentException("Post argument must be either \"weather\", \"twitter\", or \"subway\"");
        }
        last_request = request.command;
        timestamp = System.currentTimeMillis();
        return request;
    }

    @RequestMapping(value="/getlastcommand")
    public LastCommand getlastcommand() {
        return new LastCommand(last_request, timestamp);
    }

}
