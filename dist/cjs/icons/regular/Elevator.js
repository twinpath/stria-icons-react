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
var Elevator_exports = {};
__export(Elevator_exports, {
  default: () => Elevator_default
});
module.exports = __toCommonJS(Elevator_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ElevatorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V192C512 156.654 483.348 128 448 128ZM464 448C464 456.822 456.822 464 448 464H432V400C432 373.49 410.51 352 384 352H320C293.49 352 272 373.49 272 400V464H240V400C240 373.49 218.51 352 192 352H128C101.49 352 80 373.49 80 400V464H64C55.178 464 48 456.822 48 448V192C48 183.178 55.178 176 64 176H448C456.822 176 464 183.178 464 192V448ZM160 224C133.475 224.1 112 245.543 112 272C112 298.455 133.475 319.9 160 320C186.525 319.9 208 298.455 208 272C208 245.543 186.525 224.1 160 224ZM352 224C325.475 224.1 304 245.543 304 272C304 298.455 325.475 319.9 352 320C378.525 319.9 400 298.455 400 272C400 245.543 378.525 224.1 352 224ZM79 96H209C214.967 96 220.367 92.598 222.75 87.338C225.135 82.076 224.049 75.951 219.996 71.752L154.996 4.41C149.312 -1.471 138.687 -1.471 133.004 4.41L68.004 71.752C63.951 75.951 62.867 82.076 65.248 87.338C67.633 92.598 73.033 96 79 96ZM357.012 91.59C362.697 97.471 373.32 97.471 379.004 91.59L444.006 24.248C448.059 20.049 449.143 13.924 446.76 8.662C444.375 3.402 438.977 0 433.008 0H303.008C297.041 0 291.641 3.402 289.26 8.662C286.875 13.924 287.959 20.049 292.012 24.248L357.012 91.59Z" })
  }
));
ElevatorRegular.displayName = "ElevatorRegular";
var Elevator_default = ElevatorRegular;
