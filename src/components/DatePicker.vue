<template>
    <div class="form-groups page_search">
      <div class="unique-label d-flex j-between a-center" @click="toggleDatePicker">
        <span class="text">{{ selectedDateText }}</span>
        <Icons name="calendar" />
      </div>
      <div v-if="isDatePickerVisible" class="unique-date-picker" @click.stop>
        <div class="unique-header">
          <div class="d-flex gap12">
            <span v-if="currentMode !== 'month'" @click="showYears">{{ currentYear }}</span>
            <span v-if="currentMode !== 'year'" @click="showMonths">{{ currentMonthName }}</span>
          
          </div>
          <div>
            <!-- <span class="unique-double-dropdown" @click="prevYear">&laquo;</span> -->
            <span v-if="currentMode === 'date'" class="unique-dropdown" @click="prev">&lt;</span>
            <span v-if="currentMode === 'date'" class="unique-dropdown" @click="next">&gt;</span>
            <!-- <span class="unique-double-dropdown" @click="nextYear">&raquo;</span> -->
          </div>
        </div>
        <div class="unique-body">
          <template v-if="currentMode === 'date'">
            <div class="unique-weekdays">
              <div class="unique-weekday" v-for="weekday in weekdays" :key="weekday">{{ weekday }}</div>
            </div>
            <div class="unique-days">
              <div v-for="day in days" :key="day.date" :class="day.classes" @click="selectDate(day)">
                {{ day.text }}
              </div>
            </div>
          </template>
          <template v-else-if="currentMode === 'year'">
            <div class="unique-years">
              <div v-for="year in years" :key="year" class="unique-year" @click="selectYear(year)">
                {{ year }}
              </div>
            </div>
          </template>
          <template v-else-if="currentMode === 'month'">
            <div class="unique-months">
              <div v-for="(month, index) in months" :key="month" class="unique-month" @click="selectMonth(index)">
                {{ month }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Icons from './Icons.vue';
  
  export default {
  
    components: {
      Icons
    },
    props: {
      writeDay: {
        type: String,
        default: Date.now()
      },
      placeholder: {
        type: String,
        default: 'tanlang'
      }
    },
    data() {
      return {
        isDatePickerVisible: false,
        selectedDate: null, // Initialize as null
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        currentMode: 'date',
        weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        months: [
          'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
          'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ]
      };
    },
    computed: {
      selectedDateText() {
        return this.selectedDate ? this.formattedSelectedDate : this.placeholder;
      },
      formattedSelectedDate() {
        return this.selectedDate
          ? `${this.pad(this.selectedDate.getDate())}/${this.pad(this.selectedDate.getMonth() + 1)}/${this.selectedDate.getFullYear()}`
          : '';
      },
      currentMonthName() {
        return this.months[this.currentMonth];
      },
      days() {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const days = [];
        let startDay = firstDay === 0 ? 6 : firstDay - 1;
  
        if (startDay > 0) {
          const prevMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate();
          for (let i = startDay; i > 0; i--) {
            days.push({
              text: prevMonthDays - i + 1,
              classes: 'unique-day unique-not-current',
              date: new Date(this.currentYear, this.currentMonth - 1, prevMonthDays - i + 1),
              isCurrentMonth: false
            });
          }
        }
  
        for (let i = 1; i <= daysInMonth; i++) {
          let dayClass = 'unique-day';
          if (
            this.selectedDate &&
            i === this.selectedDate.getDate() &&
            this.currentYear === this.selectedDate.getFullYear() &&
            this.currentMonth === this.selectedDate.getMonth()
          ) {
            dayClass += ' unique-selected';
          }
          if (
            i === new Date().getDate() &&
            this.currentYear === new Date().getFullYear() &&
            this.currentMonth === new Date().getMonth()
          ) {
            dayClass += ' unique-today';
          }
          days.push({
            text: i,
            classes: dayClass,
            date: new Date(this.currentYear, this.currentMonth, i),
            isCurrentMonth: true
          });
        }
  
        const nextMonthDays = 42 - days.length;
        for (let i = 1; i <= nextMonthDays; i++) {
          days.push({
            text: i,
            classes: 'unique-day unique-not-current',
            date: new Date(this.currentYear, this.currentMonth + 1, i),
            isCurrentMonth: false
          });
        }
  
        return days;
      },
      years() {
        const years = [];
        for (let i = this.currentYear - 4; i <= this.currentYear + 5; i++) {
          years.push(i);
        }
        return years;
      }
    },
    watch: {
      writeDay: {
        immediate: true,
        handler(newValue) {
          if (newValue) {
            const date = new Date(newValue);
            if (!isNaN(date)) {
              this.selectedDate = date;
              this.currentYear = date.getFullYear();
              this.currentMonth = date.getMonth();
            }
          }
        }
      }
    },
    methods: {
      pad(value) {
        return value < 10 ? '0' + value : value;
      },
      toggleDatePicker() {
        this.isDatePickerVisible = !this.isDatePickerVisible;
      },
      prev() {
        if (this.currentMode === 'date') {
          this.currentMonth--;
          if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
          }
        }
      },
      next() {
        if (this.currentMode === 'date') {
          this.currentMonth++;
          if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
          }
        }
      },
      prevYear() {
        this.currentYear--;
      },
      nextYear() {
        this.currentYear++;
      },
      showYears() {
        this.currentMode = 'year';
      },
      showMonths() {
        this.currentMode = 'month';
      },
      selectYear(year) {
        this.currentYear = year;
        this.currentMode = 'month';
      },
      selectMonth(month) {
        this.currentMonth = month;
        this.currentMode = 'date';
      },
      selectDate(day) {
        this.selectedDate = day.date;
        this.$emit('dateSelected', this.selectedDate.toISOString())
        if (!day.isCurrentMonth) {
          this.currentMonth = day.date.getMonth();
          this.currentYear = day.date.getFullYear();
        }
        this.isDatePickerVisible = false;
      },
      closeDatePicker(event) {
        if (!this.$el.contains(event.target)) {
          this.isDatePickerVisible = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.closeDatePicker);
    },
  };
  </script>
  <style>
  .page_search {
    width: 100% !important;
  }
  </style>