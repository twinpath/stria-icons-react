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
const TurkishLiraSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.448 302.578C366.323 405.375 278.248 480 174.017 480H104.003C81.91 480 64.005 462.094 64.005 440V280.137L40.802 286.766C37.865 287.609 34.896 288.016 31.99 288.016C18.069 288.016 5.256 278.844 1.241 264.797C-3.618 247.797 6.225 230.094 23.209 225.234L64.005 213.578V184.137L40.802 190.766C37.865 191.609 34.896 192.016 31.99 192.016C18.069 192.016 5.256 182.844 1.241 168.797C-3.618 151.797 6.225 134.094 23.209 129.234L64.005 117.578V72C64.005 49.906 81.91 32 104.003 32S144.002 49.906 144.002 72V94.721L247.202 65.234C264.233 60.344 281.904 70.219 286.763 87.203C291.623 104.203 281.779 121.906 264.795 126.766L144.002 161.279V190.721L247.202 161.234C264.233 156.328 281.904 166.219 286.763 183.203C291.623 200.203 281.779 217.906 264.795 222.766L144.002 257.279V400H174.017C238.968 400 293.873 353.5 304.544 289.422C308.153 267.625 328.715 252.922 350.574 256.547C372.354 260.172 387.088 280.781 383.448 302.578Z" })
  }
));
TurkishLiraSignSolid.displayName = "TurkishLiraSignSolid";
var TurkishLiraSign_default = TurkishLiraSignSolid;
