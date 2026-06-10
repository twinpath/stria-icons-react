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
var Wheelchair_exports = {};
__export(Wheelchair_exports, {
  default: () => Wheelchair_default
});
module.exports = __toCommonJS(Wheelchair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WheelchairRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M291.344 394.828C279.641 388.609 265.125 392.969 258.859 404.688C239.312 441.281 201.438 464 160 464C98.25 464 48 413.75 48 352C48 304.891 77.766 262.531 122.062 246.578C134.531 242.094 141.016 228.344 136.516 215.875C132.031 203.375 118.266 196.906 105.812 201.422C42.516 224.203 0 284.719 0 352C0 440.219 71.781 512 160 512C219.188 512 273.297 479.547 301.203 427.312C307.453 415.625 303.031 401.078 291.344 394.828ZM192 96C218.51 96 240 74.51 240 48S218.51 0 192 0S144 21.49 144 48S165.49 96 192 96ZM510.762 432.406C506.59 419.844 493.012 413 480.402 417.234L453.201 426.297L405.982 318.375C402.17 309.641 393.529 304 383.998 304H244.031L229.484 224H343.998C357.248 224 367.998 213.25 367.998 200S357.248 176 343.998 176H220.756L215.609 147.703C213.234 134.656 200.703 125.938 187.703 128.391C174.672 130.766 166.016 143.25 168.391 156.297L200.391 332.297C202.469 343.703 212.406 352 224 352H368.295L418.014 465.625C421.92 474.562 430.701 480 439.998 480C442.514 480 445.076 479.609 447.592 478.766L495.59 462.766C508.168 458.578 514.949 444.984 510.762 432.406Z" })
  }
));
WheelchairRegular.displayName = "WheelchairRegular";
var Wheelchair_default = WheelchairRegular;
