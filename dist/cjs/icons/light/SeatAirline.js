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
var SeatAirline_exports = {};
__export(SeatAirline_exports, {
  default: () => SeatAirline_default
});
module.exports = __toCommonJS(SeatAirline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SeatAirlineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.895 287.906C432.27 277.781 420.645 272 407.973 272H84.379L63.381 224H336C344.836 224 352 216.836 352 208C352 199.162 344.836 192 336 192H49.381L36.531 162.625C33.516 155.75 32 148.5 32 141.031V16C32 7.156 24.844 0 16 0S0 7.156 0 16V141.031C0 152.906 2.422 164.5 7.203 175.438L89.953 364.562C103.594 395.812 134.453 416 168.578 416H224V480H112C103.164 480 96 487.162 96 496C96 504.836 103.164 512 112 512H368C376.836 512 384 504.836 384 496C384 487.162 376.836 480 368 480H256V416H383.662C404.988 416 423.957 401.688 429.816 381.188L446.439 322.969C449.908 310.781 447.533 298 439.895 287.906ZM415.66 314.188L399.035 372.406C397.098 379.219 390.77 384 383.662 384H168.578C147.188 384 127.828 371.344 119.266 351.75L98.377 304H407.973C413.195 304 417.144 308.983 415.66 314.188Z" })
  }
));
SeatAirlineLight.displayName = "SeatAirlineLight";
var SeatAirline_default = SeatAirlineLight;
