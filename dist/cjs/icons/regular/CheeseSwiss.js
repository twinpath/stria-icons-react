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
var CheeseSwiss_exports = {};
__export(CheeseSwiss_exports, {
  default: () => CheeseSwiss_default
});
module.exports = __toCommonJS(CheeseSwiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheeseSwissRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 319.875C149.5 319.875 128 341.375 128 367.875S149.5 415.875 176 415.875S224 394.375 224 367.875S202.5 319.875 176 319.875ZM299.875 32H298.375C291.25 32.125 284.25 34.5 278.75 39L0 255.875V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V255.875C512 136 417.999 38.25 299.875 32ZM196.5 163.75C204.625 181.875 223.125 193 242.875 191.875C262.75 190.625 279.75 177.375 285.75 158.5S285.5 119 269.999 106.625L303.625 80.5C391.375 88.125 459.25 159.875 463.25 247.875H409.375C400.875 233 385.125 223.875 368 223.875S335.125 233 326.625 247.875H88.5L196.5 163.75ZM464 432H48V295.875H326.625C335.125 310.75 350.875 319.875 368 319.875S400.875 310.75 409.375 295.875H464V432Z" })
  }
));
CheeseSwissRegular.displayName = "CheeseSwissRegular";
var CheeseSwiss_default = CheeseSwissRegular;
