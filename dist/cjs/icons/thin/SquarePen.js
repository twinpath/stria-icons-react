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
var SquarePen_exports = {};
__export(SquarePen_exports, {
  default: () => SquarePen_default
});
module.exports = __toCommonJS(SquarePen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M329.365 138.545C322.34 131.518 313.123 128 303.908 128C294.697 128 285.488 131.512 278.459 138.543L117.676 299.342C113.377 303.641 110.41 309.029 109.08 314.963C104.869 333.742 96.166 374.586 96.166 374.586C95.082 380.014 99.406 383.996 103.943 383.996C104.441 383.996 104.941 383.949 105.437 383.85C105.437 383.85 146.277 375.143 165.053 370.93C170.986 369.6 176.373 366.633 180.672 362.334L341.455 201.553C355.514 187.496 355.516 164.703 341.459 150.643L329.365 138.545ZM169.359 351.02C167.211 353.168 164.512 354.654 161.551 355.316C149.387 358.047 127.939 362.666 114.459 365.559C117.359 352.016 121.969 330.609 124.693 318.461C125.357 315.502 126.842 312.803 128.99 310.654L254.16 185.473L294.533 225.846L169.359 351.02ZM330.141 190.238L305.846 214.533L265.473 174.16L289.775 149.855C293.549 146.078 298.568 144 303.908 144C309.252 144 314.273 146.08 318.051 149.857L330.145 161.955C337.941 169.754 337.939 182.441 330.141 190.238ZM384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416Z" })
  }
));
SquarePenThin.displayName = "SquarePenThin";
var SquarePen_default = SquarePenThin;
