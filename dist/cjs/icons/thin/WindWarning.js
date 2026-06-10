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
var WindWarning_exports = {};
__export(WindWarning_exports, {
  default: () => WindWarning_default
});
module.exports = __toCommonJS(WindWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindWarningThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 216H564C605.906 216 640 181.906 640 140S605.906 64 564 64H520C515.594 64 512 67.594 512 72S515.594 80 520 80H564C597.094 80 624 106.906 624 140S597.094 200 564 200H472C467.594 200 464 203.594 464 208S467.594 216 472 216ZM355.531 378.875C318.906 422.812 265.125 448 208 448C102.125 448 16 361.875 16 256S102.125 64 208 64C302.781 64 382.531 131.812 397.562 225.281C398.281 229.656 402.156 232.656 406.75 231.906C411.094 231.188 414.062 227.094 413.375 222.719C397.062 121.469 310.688 48 208 48C93.312 48 0 141.312 0 256S93.312 464 208 464C269.906 464 328.156 436.719 367.844 389.125C370.656 385.719 370.219 380.687 366.812 377.844C363.438 375.031 358.406 375.469 355.531 378.875ZM216.02 296V136C216.02 131.594 212.426 128 208.02 128S200.02 131.594 200.02 136V296C200.02 300.406 203.613 304 208.02 304S216.02 300.406 216.02 296ZM560 288H328C323.594 288 320 291.594 320 296S323.594 304 328 304H560C595.281 304 624 332.719 624 368S595.281 432 560 432H520C515.594 432 512 435.594 512 440S515.594 448 520 448H560C604.125 448 640 412.125 640 368S604.125 288 560 288ZM192.082 368C192.082 376.822 199.26 384 208.082 384S224.082 376.822 224.082 368S216.904 352 208.082 352S192.082 359.178 192.082 368Z" })
  }
));
WindWarningThin.displayName = "WindWarningThin";
var WindWarning_default = WindWarningThin;
