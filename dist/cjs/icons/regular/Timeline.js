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
var Timeline_exports = {};
__export(Timeline_exports, {
  default: () => Timeline_default
});
module.exports = __toCommonJS(Timeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimelineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 232H536V123.254C559.436 113.75 576 90.844 576 64C576 28.656 547.348 0 512 0C476.654 0 448 28.656 448 64C448 90.844 464.564 113.75 488 123.254V232H152V123.254C175.436 113.75 192 90.844 192 64C192 28.656 163.348 0 128 0C92.654 0 64 28.656 64 64C64 90.844 80.564 113.75 104 123.254V232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H296V388.746C272.564 398.25 256 421.156 256 448C256 483.344 284.654 512 320 512C355.348 512 384 483.344 384 448C384 421.156 367.436 398.25 344 388.746V280H616C629.25 280 640 269.25 640 256S629.25 232 616 232ZM512 40C525.234 40 536 50.766 536 64C536 77.232 525.234 88 512 88C498.768 88 488 77.232 488 64C488 50.766 498.768 40 512 40ZM128 40C141.234 40 152 50.766 152 64C152 77.232 141.234 88 128 88C114.768 88 104 77.232 104 64C104 50.766 114.768 40 128 40ZM320 472C306.768 472 296 461.232 296 448C296 434.766 306.768 424 320 424C333.234 424 344 434.766 344 448C344 461.232 333.234 472 320 472Z" })
  }
));
TimelineRegular.displayName = "TimelineRegular";
var Timeline_default = TimelineRegular;
