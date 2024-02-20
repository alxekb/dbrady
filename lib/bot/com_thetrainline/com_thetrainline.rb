# frozen_string_literal: true

module Bot
  # Class for interacting with TheTrainline website
  class ComThetrainline
    # Triggers a search on TheTrainline and returns results
    #
    # @param from [String] The departure station
    # @param to [String] The arrival station
    # @param departure_at [DateTime] The desired departure time
    # @return [Array<Segment>] The found segments
    #
    # == Example
    #
    #   Bot.find('London', 'Manchester', DateTime.now)
    #   # => [Segment]
    def self.find(from, to, departure_at)
      new.find(from, to, departure_at)
    end

    # The transport attribute is responsible for making HTTP requests
    # In this naive implementation it just returns a mock of an HTML document
    #
    # @param transport [ComThetrainline::HttpTransport] The transport to use
    # @param adapter [ComThetrainline::Adapter] The adapter to use to convert document to a consumable object
    #
    # == Example
    #   transport = ComThetrainline::HttpTransport.new
    #   adapter = ComThetrainline::Adapter.new
    #   ComThetrainline.new(transport: transport, adapter: adapter)
    def initialize(transport: ComThetrainline::HttpTransport.new, adapter: ComThetrainline::Adapter.new)
      @transport = transport
      @adapter = adapter
    end

    # Triggers a search on TheTrainline and returns results
    #
    # @param from [String] The departure station
    # @param to [String] The arrival station
    # @param departure_at [DateTime] The desired departure time
    # @return [Array<Segment>] The found segments
    #
    # == Example
    #   ComThetrainline.find('London', 'New York', DateTime.now)
    #
    # I don\'t like the way I set/use instance variables in this example. But it handy to have this
    # variables here instead of passing arguments through the methods.
    def find(from, to, departure_at)
      @from = from
      @to = to
      @departure_at = departure_at

      consume
    end

    private

    attr_reader :transport, :adapter, :from, :to, :departure_at

    def consume
      adapter.consume(html_string)
    end

    def html_string
      @html_string ||= transport.fetch(from, to, departure_at)
    end
  end
end
