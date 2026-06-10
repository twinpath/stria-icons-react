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
var LampDesk_exports = {};
__export(LampDesk_exports, {
  default: () => LampDesk_default
});
module.exports = __toCommonJS(LampDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampDeskRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M392.652 278.572C402.228 285.023 413.193 288.188 424.093 288.188C445.422 288.188 480.03 271.713 480.03 232.301C480.03 221.411 476.862 210.456 470.406 200.889L392.652 278.572ZM512.001 99.623C512.001 80.521 496.539 64.379 476.781 64.379H391.777L355.9 28.535C337.307 9.678 312.577 -0.001 287.7 -0.001C268.087 -0.001 248.382 6.015 231.52 18.293C205.945 36.771 192.028 65.845 192.028 95.605C192.028 110.5 195.514 125.568 202.77 139.564L103.016 239.23C98.463 243.779 95.982 249.912 95.982 256.197C95.982 258.37 96.278 260.561 96.889 262.711L154.518 464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H360C373.254 512 384 501.254 384 488C384 474.744 373.254 464 360 464H204.395L147.018 263.211L233.145 177.158L256.021 200.014V284.941C256.021 304.532 272.007 320.13 291.298 320.13C300.459 320.13 309.473 316.549 316.148 309.797L501.656 124.453C508.416 117.783 512.001 108.776 512.001 99.623ZM304.023 254.094V180.156L254.146 130.322C245.037 120.973 240.505 108.892 240.505 96.833C240.505 59.306 274.908 48.938 288.489 48.938C300.574 48.938 312.666 53.466 322.023 62.506L371.902 112.338H445.904L304.023 254.094Z " })
  }
));
LampDeskRegular.displayName = "LampDeskRegular";
var LampDesk_default = LampDeskRegular;
