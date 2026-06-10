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
var ClockDesk_exports = {};
__export(ClockDesk_exports, {
  default: () => ClockDesk_default
});
module.exports = __toCommonJS(ClockDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockDeskDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.289 0 0 100.289 0 224S100.289 448 224 448S448 347.711 448 224S347.711 0 224 0ZM307.217 302.406C302.498 308.688 295.295 312 287.998 312C282.982 312 277.936 310.438 273.607 307.188L209.607 259.188C203.576 254.656 200.014 247.562 200.014 240V120C200.014 106.75 210.764 96 224.014 96S248.014 106.75 248.014 120V228L302.42 268.812C313.014 276.75 315.17 291.781 307.217 302.406Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M273.607 307.188C277.936 310.438 282.982 312 287.998 312C295.295 312 302.498 308.688 307.217 302.406C315.17 291.781 313.014 276.75 302.42 268.812L248.014 228V120C248.014 106.75 237.264 96 224.014 96S200.014 106.75 200.014 120V240C200.014 247.562 203.576 254.656 209.607 259.188L273.607 307.188ZM224 448C100.289 448 0 347.711 0 224V464C0 490.508 21.49 512 48 512H400C426.51 512 448 490.508 448 464V224C448 347.711 347.711 448 224 448Z" })
    ]
  }
));
ClockDeskDuotone.displayName = "ClockDeskDuotone";
var ClockDesk_default = ClockDeskDuotone;
