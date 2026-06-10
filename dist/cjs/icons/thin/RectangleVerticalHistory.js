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
var RectangleVerticalHistory_exports = {};
__export(RectangleVerticalHistory_exports, {
  default: () => RectangleVerticalHistory_default
});
module.exports = __toCommonJS(RectangleVerticalHistory_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleVerticalHistoryThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0H256C220.654 0 192 28.652 192 64V448C192 483.348 220.654 512 256 512H512C547.346 512 576 483.348 576 448V64C576 28.652 547.346 0 512 0ZM560 448C560 474.467 538.467 496 512 496H256C229.533 496 208 474.467 208 448V64C208 37.533 229.533 16 256 16H512C538.467 16 560 37.533 560 64V448ZM152 64C156.422 64 160 60.406 160 56S156.422 48 152 48C121.125 48 96 73.125 96 104V408C96 438.875 121.125 464 152 464C156.422 464 160 460.406 160 456S156.422 448 152 448C129.938 448 112 430.062 112 408V104C112 81.938 129.938 64 152 64ZM56 112C60.422 112 64 108.406 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V360C0 390.875 25.125 416 56 416C60.422 416 64 412.406 64 408S60.422 400 56 400C33.938 400 16 382.062 16 360V152C16 129.938 33.938 112 56 112Z" })
  }
));
RectangleVerticalHistoryThin.displayName = "RectangleVerticalHistoryThin";
var RectangleVerticalHistory_default = RectangleVerticalHistoryThin;
