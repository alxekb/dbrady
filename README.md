## README

```ruby

ComThetrainline.find(from, to, departure_at)

# scrapes a webpabe
ComThetrainline::HttpTransport.new()
=> returns HTML string

ComThetrainline::Adapter.new(html_string)
 => returns requested data in a consumable format

```

## response example

```ruby
[#<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T08:01:00+00:00 ((2460359j,28860s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T11:35:00+01:00 ((2460359j,38100s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=154,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T09:31:00+00:00 ((2460359j,34260s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T12:53:00+01:00 ((2460359j,42780s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=142,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T10:31:00+00:00 ((2460359j,37860s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T13:52:00+01:00 ((2460359j,46320s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=141,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T12:31:00+00:00 ((2460359j,45060s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T16:01:00+01:00 ((2460359j,54060s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=150,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=[]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T13:31:00+00:00 ((2460359j,48660s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T17:05:00+01:00 ((2460359j,57900s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=154,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=[#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=37375, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T14:31:00+00:00 ((2460359j,52260s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T17:58:00+01:00 ((2460359j,61080s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=147,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T15:31:00+00:00 ((2460359j,55860s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T19:03:00+01:00 ((2460359j,64980s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=152,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T16:01:00+00:00 ((2460359j,57660s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T19:21:00+01:00 ((2460359j,66060s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=140,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T16:31:00+00:00 ((2460359j,59460s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T20:02:00+01:00 ((2460359j,68520s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=151,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T17:04:00+00:00 ((2460359j,61440s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T20:35:00+01:00 ((2460359j,70500s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=151,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=[]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T18:01:00+00:00 ((2460359j,64860s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T21:24:00+01:00 ((2460359j,73440s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=143,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T19:01:00+00:00 ((2460359j,68460s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T22:25:00+01:00 ((2460359j,77100s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=144,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=
   [#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=25000, currency="€", comfort_class=2>,
    #<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>,
 #<struct Bot::ComThetrainline::Segment::ENTRY
  departure_station="London",
  departure_at=#<DateTime: 2024-02-18T20:01:00+00:00 ((2460359j,72060s,0n),+0s,2299161j)>,
  arrival_station="Paris",
  arrival_at=#<DateTime: 2024-02-18T23:18:00+01:00 ((2460359j,80280s,0n),+3600s,2299161j)>,
  service_agencies=["thetrainline"],
  duration_in_minutes=137,
  changeovers=0,
  products=["Train • €250.00", "Bus"],
  fares=[#<struct Bot::ComThetrainline::Fare name="standard", price_in_cents=31000, currency="€", comfort_class=1>]>]
 ESC
```
