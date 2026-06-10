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
var Stomach_exports = {};
__export(Stomach_exports, {
  default: () => Stomach_default
});
module.exports = __toCommonJS(Stomach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StomachRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M397.871 96.75C341.623 90.751 292.249 121.751 269.5 168H256C216.236 168 184 135.764 184 96V24C184 10.745 173.255 0 160 0H160C146.745 0 136 10.745 136 24V96C136 162.274 189.726 216 256 216H256.75C256.625 218.75 256 221.25 256 224V288C256 327.764 223.764 360 184 360H120C53.726 360 0 413.726 0 480V488C0 501.255 10.745 512 24 512H24C37.255 512 48 501.255 48 488V478.875C48 427.182 107.977 398.625 148.105 431.213L189.25 464.625C217.671 487.706 251.271 504.558 287.5 509.841C408.109 527.427 512 434.047 512 316.75L512 229.686C512 163.285 463.897 103.792 397.871 96.75ZM316.75 464C283.125 464 250.125 452.25 224 431L195 407.5C241.625 403.25 280.375 372.25 296.25 330L296.5 330.75C320.75 321.625 350.875 325 369.5 339.125C389.625 354.375 416.25 362.25 443 362.25C447.5 362.25 452 361.625 456.375 361.125C437.5 420.5 382.375 464 316.75 464ZM464 311.125C441.25 317.125 415.25 313.625 398.5 300.875C373.125 281.75 337.5 274.25 304 279.5V224C304 179.875 339.875 144 384 144S464 179.875 464 224V311.125Z" })
  }
));
StomachRegular.displayName = "StomachRegular";
var Stomach_default = StomachRegular;
