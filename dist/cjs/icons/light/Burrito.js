var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Burrito_exports = {};
__export(Burrito_exports, {
  default: () => Burrito_default
});
module.exports = __toCommonJS(Burrito_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurritoLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.957 123.048C511.957 90.547 490.706 61.921 459.705 52.295C453.454 31.92 438.704 15.294 419.203 6.544C399.702 -2.207 377.452 -2.082 358.076 6.794C317.324 -11.082 269.823 7.544 252.072 48.295L33.939 266.553C-11.313 311.805 -11.313 385.308 33.939 430.559L81.441 478.061C126.692 523.313 200.195 523.313 245.447 478.061L463.705 259.928C504.456 242.177 523.082 194.676 505.206 153.924C509.707 144.299 511.957 133.673 511.957 123.048ZM267.448 78.171C280.948 103.422 287.948 131.548 287.948 160.049C287.948 257.053 208.945 336.056 111.942 336.056C86.191 335.931 60.69 330.181 37.439 319.18C41.564 307.93 48.064 297.679 56.565 289.179L267.448 78.171ZM222.821 455.435C190.07 488.312 136.818 488.312 104.066 455.435L56.565 407.934C41.689 393.058 33.064 373.182 32.314 352.182C57.565 362.682 84.566 368.057 111.942 368.057C202.07 368.057 278.823 310.305 307.574 229.927C350.076 219.052 395.077 224.302 433.954 244.428L222.821 455.435ZM479.955 186.05C479.955 201.426 472.58 214.676 461.58 223.677C418.453 196.926 366.201 187.175 316.699 195.426C318.824 183.8 319.824 171.925 319.949 160.049C319.949 120.923 308.699 83.546 288.198 50.67C297.199 38.92 311.199 32.17 325.95 32.045C338.075 32.045 349.826 36.67 358.826 44.92C370.701 32.545 388.827 28.669 404.703 35.045C420.578 41.545 430.954 56.92 430.954 74.046C430.954 76.671 430.704 79.296 430.204 81.796C442.454 79.421 455.204 82.671 464.83 90.672C474.455 98.672 480.08 110.547 479.955 123.048C479.955 134.423 475.33 145.299 467.08 153.174C475.33 162.174 479.955 173.925 479.955 186.05Z" })
  }
));
BurritoLight.displayName = "BurritoLight";
var Burrito_default = BurritoLight;
