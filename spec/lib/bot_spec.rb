# frozen_string_literal: true

require 'rspec'
require 'bot'

RSpec.describe Bot::ComThetrainline do # rubocop:disable Metrics/BlockLength
  describe '@find' do # rubocop:disable Metrics/BlockLength
    subject(:bot) { described_class.find(from, to, departure_at) }

    let(:from) { 'London' }
    let(:to) { 'Paris' }
    let(:departure_at) { DateTime.now }

    context 'when it passes the requirements' do # rubocop:disable Metrics/BlockLength
      it 'should return an array' do
        is_expected.to be_a(Array)
      end

      describe 'first element' do
        let(:departed_at) { DateTime.parse('2024-02-18T08:01:00+00:00') }
        let(:duration_in_minutes) { 154 }
        let(:products) { ['Train • €250.00', 'Bus'] }
        let(:changeovers) { 0 }

        it 'has attributes' do
          aggregate_failures do
            expect(bot.first.departure_at).to eq(departed_at)
            expect(bot.first.departure_station).to eq(from)
            expect(bot.first.arrival_station).to eq(to)
            expect(bot.first.service_agencies).to eq(['thetrainline'])
            expect(bot.first.duration_in_minutes).to eq(duration_in_minutes)
            expect(bot.first.changeovers).to eq(changeovers)
            expect(bot.first.products).to eq(products)
            expect(bot.first.fares).to be_a(Array)
          end
        end

        it 'has fares' do
          aggregate_failures do
            expect(bot.first.fares.size).to eq(2)
            expect(bot.first.fares.first.name).to eq('standard')
            expect(bot.first.fares.first.price_in_cents).to eq(25_000)
            expect(bot.first.fares.first.currency).to eq('€')
            expect(bot.first.fares.first.comfort_class).to eq(2)
          end
        end
      end
    end
  end
end
