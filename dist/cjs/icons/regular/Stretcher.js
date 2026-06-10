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
var Stretcher_exports = {};
__export(Stretcher_exports, {
  default: () => Stretcher_default
});
module.exports = __toCommonJS(Stretcher_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StretcherRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 224.004H186.311L41.403 71.477C32.247 61.852 17.059 61.477 7.465 70.602S-2.535 94.912 6.59 104.537L158.592 264.535C163.123 269.316 169.405 272.004 175.998 272.004H616C629.25 272.004 640 261.254 640 248.004S629.25 224.004 616 224.004ZM480 384.002C473.129 384.002 466.637 385.367 460.436 387.371L408.668 349.541L470.985 304.004H389.645L367.998 319.82L346.352 304.004H265.012L327.329 349.541L275.561 387.371C269.36 385.367 262.868 384.002 255.998 384.002C220.653 384.002 191.998 412.656 191.998 448C191.998 483.346 220.653 512 255.998 512S319.998 483.346 319.998 448C319.998 437.686 317.33 428.082 312.997 419.455L367.998 379.26L423 419.455C418.666 428.082 415.998 437.686 415.998 448C415.998 483.346 444.653 512 480 512C515.346 512 544 483.346 544 448C544 412.656 515.346 384.002 480 384.002ZM255.998 464C247.176 464 239.998 456.822 239.998 448S247.176 432 255.998 432S271.998 439.178 271.998 448S264.821 464 255.998 464ZM480 464C471.176 464 463.998 456.822 463.998 448S471.176 432 480 432C488.823 432 496 439.178 496 448S488.823 464 480 464Z" })
  }
));
StretcherRegular.displayName = "StretcherRegular";
var Stretcher_default = StretcherRegular;
