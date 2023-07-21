<template>
  <form class="form" @submit.prevent="submitForm">
    <h4>Register</h4>
    <input
      v-model="email"
      class="input"
      name="email"
      type="email"
      placeholder="Email"
      required
      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    />
    <input
      v-model="number"
      class="input"
      name="number"
      type="tel"
      placeholder="Number"
      required
      pattern="^\380\d{9}$"
    />
    <button class="btn">Register</button>
  </form>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      email: "",
      number: "",
    };
  },
  methods: {
    hideModal() {
      this.$emit("updateShow", this.show);
    },
    async submitForm() {
      const formData = {
        email: this.email,
        number: this.number,
      };

      try {
        await this.createDatabaseAndSaveData(formData);
        console.log("Form data saved to IndexedDB.");
      } catch (error) {
        console.error("Error saving form data:", error);
      }
      this.$emit("updateShow", this.show);
    },
    async createDatabaseAndSaveData(formData) {
      const db = await this.openDatabase();
      const tx = db.transaction("my-store", "readwrite");
      const store = tx.objectStore("my-store");

      return new Promise((resolve, reject) => {
        const request = store.add(formData);

        request.onsuccess = () => {
          resolve();
        };

        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    },
    async openDatabase() {
      return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("my-database", 1);

        request.onupgradeneeded = (event) => {
          const db = event.target.result;

          if (!db.objectStoreNames.contains("my-store")) {
            db.createObjectStore("my-store", { autoIncrement: true });
          }
        };

        request.onsuccess = (event) => {
          const db = event.target.result;
          resolve(db);
        };

        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  padding: 20px;
}

.input {
  width: auto;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 5px;
}

.btn {
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.btn:hover,
.btn:focus {
  background-color: #303f9f;
}
</style>
