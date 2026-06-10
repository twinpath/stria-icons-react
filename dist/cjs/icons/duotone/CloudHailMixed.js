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
var CloudHailMixed_exports = {};
__export(CloudHailMixed_exports, {
  default: () => CloudHailMixed_default
});
module.exports = __toCommonJS(CloudHailMixed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudHailMixedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 448C14.25 448 0 462.25 0 480S14.25 512 32 512S64 497.75 64 480S49.75 448 32 448ZM256 448C238.25 448 224 462.25 224 480S238.25 512 256 512S288 497.75 288 480S273.75 448 256 448ZM198.781 353.938C186.609 348.719 172.484 354.344 167.266 366.531L119.266 478.531C114.047 490.719 119.688 504.844 131.875 510.063C134.953 511.375 138.156 512 141.312 512C150.625 512 159.484 506.562 163.391 497.469L211.391 385.469C216.609 373.281 210.969 359.156 198.781 353.938ZM81.453 353.938C69.266 348.719 55.156 354.344 49.938 366.531L41.938 385.188C36.719 397.375 42.359 411.5 54.547 416.719C57.625 418.031 60.828 418.656 63.984 418.656C73.297 418.656 82.156 413.219 86.063 404.125L94.063 385.469C99.281 373.281 93.641 359.156 81.453 353.938ZM305.453 353.938C293.266 348.719 279.156 354.344 273.938 366.531L265.938 385.188C260.719 397.375 266.359 411.5 278.547 416.719C281.625 418.031 284.828 418.656 287.984 418.656C297.297 418.656 306.156 413.219 310.063 404.125L318.063 385.469C323.281 373.281 317.641 359.156 305.453 353.938ZM433.453 353.938C421.297 348.719 407.172 354.344 401.938 366.531L353.938 478.531C348.719 490.719 354.359 504.844 366.547 510.063C369.625 511.375 372.828 512 375.984 512C385.297 512 394.156 506.562 398.062 497.469L446.062 385.469C451.281 373.281 445.641 359.156 433.453 353.938Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H416C469 320 512 277 512 224S469 128 416 128Z" })
    ]
  }
));
CloudHailMixedDuotone.displayName = "CloudHailMixedDuotone";
var CloudHailMixed_default = CloudHailMixedDuotone;
