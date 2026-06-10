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
var TurkishLiraSign_exports = {};
__export(TurkishLiraSign_exports, {
  default: () => TurkishLiraSign_default
});
module.exports = __toCommonJS(TurkishLiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurkishLiraSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286.761 87.215C281.901 70.234 264.229 60.361 247.2 65.252L143.999 94.73V161.271L264.792 126.766C281.776 121.908 291.62 104.209 286.761 87.215ZM1.241 264.787C5.257 278.83 18.069 288 31.991 288C34.897 288 37.866 287.594 40.802 286.75L64.001 280.123V213.586L23.21 225.238C6.225 230.096 -3.618 247.793 1.241 264.787ZM1.241 168.787C5.257 182.83 18.069 192 31.991 192C34.897 192 37.866 191.594 40.802 190.75L64.001 184.123V117.582L23.21 129.234C6.225 134.092 -3.618 151.791 1.241 168.787ZM247.2 161.256L143.999 190.734V257.273L264.792 222.77C281.776 217.912 291.62 200.213 286.761 183.219C281.901 166.24 264.229 156.352 247.2 161.256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.447 302.578C366.322 405.375 278.246 480 174.014 480H104C81.906 480 64 462.094 64 440V72C64 49.906 81.906 32 104 32C126.092 32 143.998 49.906 143.998 72V400H174.014C238.965 400 293.871 353.5 304.543 289.422C308.152 267.625 328.715 252.922 350.572 256.547C372.354 260.172 387.088 280.781 383.447 302.578Z" })
    ]
  }
));
TurkishLiraSignDuotone.displayName = "TurkishLiraSignDuotone";
var TurkishLiraSign_default = TurkishLiraSignDuotone;
