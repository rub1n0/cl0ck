import time
from apa102_pi.driver import apa102

# --- Configuration ---
NUM_LEDS = 42  # 1 digit = 7 segments × 6 LEDs
LEDS_PER_SEGMENT = 6
SEGMENT_ORDER = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
SEGMENT_TO_OFFSET = {seg: i for i, seg in enumerate(SEGMENT_ORDER)}

# Number-to-segment map
DIGIT_SEGMENTS = {
    '0': ['A', 'B', 'C', 'D', 'E', 'F'],
    '1': ['B', 'C'],
    '2': ['A', 'B', 'G', 'E', 'D'],
    '3': ['A', 'B', 'G', 'C', 'D'],
    '4': ['F', 'G', 'B', 'C'],
    '5': ['A', 'F', 'G', 'C', 'D'],
    '6': ['A', 'F', 'E', 'D', 'C', 'G'],
    '7': ['A', 'B', 'C'],
    '8': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    '9': ['A', 'B', 'C', 'D', 'F', 'G']
}

# --- LED Strip Initialization ---
# global_brightness = 31  Max brightness
strip = apa102.APA102(num_led=NUM_LEDS, global_brightness=(31 * .1))

def get_segment_indices(digit_index, segment):
    base = digit_index * 42  # 42 LEDs per digit
    offset = SEGMENT_TO_OFFSET[segment] * LEDS_PER_SEGMENT
    return list(range(base + offset, base + offset + LEDS_PER_SEGMENT))

def draw_digit(digit_char, digit_index=0, r=0, g=0, b=0):
    segments = DIGIT_SEGMENTS.get(digit_char, [])
    for seg in segments:
        for i in get_segment_indices(digit_index, seg):
            strip.set_pixel(i, r, g, b)

def clear_all():
    for i in range(NUM_LEDS):
        strip.set_pixel(i, 0, 0, 0)
    strip.show()

# --- Run the test ---
try:
    clear_all()
    draw_digit('8', 0, 255, 0, 0)  # Display digit '8' in red
    strip.show()
    print("Displaying digit '8' in red.")
    time.sleep(3)
    draw_digit('8', 0, 0, 255, 0)  # Display digit '8' in green
    strip.show()
    print("Displaying digit '8' in green.")
    time.sleep(3)
    draw_digit('8', 0, 0, 0, 255)  # Display digit '8' in blue
    strip.show()
    print("Displaying digit '8' in blue.")
    time.sleep(3)
    print("Turning off.")
    clear_all()

finally:
    strip.cleanup()