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
var Eclipse_exports = {};
__export(Eclipse_exports, {
  default: () => Eclipse_default
});
module.exports = __toCommonJS(Eclipse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EclipseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M155.867 346.489C105.995 296.62 105.995 215.38 155.867 165.511C190.991 130.39 241.363 120.517 285.611 134.765C293.111 124.391 301.485 114.767 310.735 105.893L261.862 9.655C255.488 -3.218 237.238 -3.218 230.864 9.655L183.616 104.269L83.121 70.773C69.497 66.273 56.622 79.272 61.122 92.77L94.62 193.133L0 240.502C-12.874 246.876 -12.874 265.124 0 271.498L94.62 318.742L61.122 419.23C56.622 432.853 69.622 445.727 83.121 441.227L183.491 407.732L230.739 502.345C237.113 515.218 255.363 515.218 261.737 502.345L309.11 407.732L314.36 409.481C303.61 399.732 294.111 388.984 285.611 377.235C241.363 391.483 190.991 381.61 155.867 346.489ZM246.363 160.012C193.491 160.012 150.368 203.131 150.368 256S193.491 351.988 246.363 351.988C254.113 351.988 261.487 350.738 268.612 349.114C254.488 321.117 246.363 289.496 246.363 256S254.488 190.883 268.612 162.886C261.487 161.262 254.113 160.012 246.363 160.012Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M639.983 256C639.983 353.238 561.237 431.979 463.991 431.979S288 353.238 288 256S366.746 80.021 463.991 80.021S639.983 158.762 639.983 256Z" })
    ]
  }
));
EclipseDuotone.displayName = "EclipseDuotone";
var Eclipse_default = EclipseDuotone;
