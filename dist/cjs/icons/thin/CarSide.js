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
var CarSide_exports = {};
__export(CarSide_exports, {
  default: () => CarSide_default
});
module.exports = __toCommonJS(CarSide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarSideThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M516.188 224.422L409.469 91.016C395.703 73.844 375.219 64 353.234 64H171.328C141.719 64 115.484 81.766 104.484 109.266L58.59 224H48C21.49 224 0 245.49 0 272V384C0 410.51 21.49 432 48 432H65.613C73.266 477.363 112.461 512 160 512S246.734 477.363 254.387 432H385.613C393.266 477.363 432.461 512 480 512S566.734 477.363 574.387 432H592C618.51 432 640 410.51 640 384V352C640 282.74 584.895 226.682 516.188 224.422ZM264 80H353.234C370.328 80 386.266 87.656 396.969 101.016L495.352 224H264V80ZM119.328 115.203C127.891 93.812 148.297 80 171.328 80H248V224H75.809L119.328 115.203ZM160 496C115.889 496 80 460.111 80 416S115.889 336 160 336C204.113 336 240 371.889 240 416S204.113 496 160 496ZM480 496C435.889 496 400 460.111 400 416S435.889 336 480 336C524.113 336 560 371.889 560 416S524.113 496 480 496ZM624 384C624 401.645 609.645 416 592 416H576C576 362.98 533.02 320 480 320S384 362.98 384 416H256C256 362.98 213.02 320 160 320S64 362.98 64 416H48C30.355 416 16 401.645 16 384V272C16 254.355 30.355 240 48 240H512C573.758 240 624 290.242 624 352V384Z" })
  }
));
CarSideThin.displayName = "CarSideThin";
var CarSide_default = CarSideThin;
