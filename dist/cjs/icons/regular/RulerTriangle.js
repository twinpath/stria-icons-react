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
var RulerTriangle_exports = {};
__export(RulerTriangle_exports, {
  default: () => RulerTriangle_default
});
module.exports = __toCommonJS(RulerTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerTriangleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.002 384H256.002L128.002 256V384ZM501.631 452.125L59.875 10.375C52.75 3.25 44 0 35.375 0C17.25 0 0 14 0 35.125V476.875C0 496.25 15.75 512 35.125 512H476.881C508.131 512 523.756 474.25 501.631 452.125ZM48 464V66.375L91.5 109.875L76.688 124.688C70.438 130.938 70.438 141.063 76.688 147.312C79.812 150.438 83.906 152 88 152S96.188 150.438 99.312 147.312L114.125 132.5L163.5 181.875L148.688 196.688C142.438 202.938 142.438 213.063 148.688 219.312C151.812 222.438 155.906 224 160 224S168.188 222.438 171.312 219.312L186.125 204.5L235.5 253.875L220.688 268.688C214.438 274.938 214.438 285.063 220.688 291.312C223.812 294.438 227.906 296 232 296S240.188 294.438 243.312 291.312L258.127 276.498L307.502 325.873L292.688 340.688C286.438 346.938 286.438 357.063 292.688 363.312C295.812 366.438 299.906 368 304 368S312.188 366.438 315.312 363.312L330.127 348.498L379.502 397.873L364.688 412.688C358.438 418.938 358.438 429.063 364.688 435.312C367.812 438.438 371.906 440 376 440S384.188 438.438 387.312 435.312L402.127 420.498L445.629 464H48Z" })
  }
));
RulerTriangleRegular.displayName = "RulerTriangleRegular";
var RulerTriangle_default = RulerTriangleRegular;
