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
const ClockDeskSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 448C347.742 448 448 347.738 448 224C448 100.258 347.742 0 224 0C100.26 0 0 100.258 0 224C0 347.738 100.26 448 224 448ZM200.014 120C200.014 106.75 210.764 96 224.014 96S248.014 106.75 248.014 120V228L302.42 268.812C313.014 276.75 315.17 291.781 307.217 302.406C302.498 308.688 295.295 312 287.998 312C282.982 312 277.936 310.438 273.607 307.188L209.607 259.188C203.576 254.656 200.014 247.562 200.014 240V120ZM224 480C127.557 480 43.648 426.617 0 347.836V464C0 490.508 21.49 512 48 512H400C426.51 512 448 490.508 448 464V347.836C404.352 426.617 320.443 480 224 480Z" })
  }
));
ClockDeskSolid.displayName = "ClockDeskSolid";
var ClockDesk_default = ClockDeskSolid;
