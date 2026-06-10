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
var Fork_exports = {};
__export(Fork_exports, {
  default: () => Fork_default
});
module.exports = __toCommonJS(Fork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.905 145.422C495.515 136.094 480.296 136.125 470.968 145.547L337.735 279.719C319.107 298.412 295.839 297.406 271.337 272.904L82.425 463.937L48.065 428.766L242.829 244.912C217.216 219.299 216.011 193.506 234.189 175.219L367.564 40.906C376.907 31.5 376.845 16.312 367.439 6.969C358.048 -2.359 342.829 -2.328 333.501 7.094L200.126 141.391C174.972 166.719 168.956 203.969 182.925 235.062L14.941 394.016C5.63 402.953 0.192 415.5 0.005 428.406C-0.183 441.344 4.958 454.047 14.081 463.234L48.331 497.734C57.347 506.828 69.769 512 82.519 512H83.191C96.112 511.812 108.644 506.297 117.269 497.203L279.751 331.813C310.095 345.344 346.595 338.938 371.798 313.531L505.03 179.359C514.374 169.953 514.312 154.766 504.905 145.422ZM333.626 225.625C338.298 230.266 344.423 232.594 350.532 232.594C356.704 232.594 362.876 230.234 367.564 225.5L459.202 133.203C468.546 123.797 468.483 108.609 459.077 99.266C449.687 89.937 434.468 89.969 425.14 99.391L333.501 191.688C324.157 201.094 324.22 216.281 333.626 225.625ZM287.798 179.484C292.47 184.125 298.595 186.453 304.704 186.453C310.876 186.453 317.048 184.094 321.735 179.359L413.374 87.062C422.718 77.656 422.655 62.469 413.249 53.125C403.858 43.797 388.642 43.828 379.314 53.25L287.673 145.547C278.329 154.953 278.392 170.141 287.798 179.484Z" })
  }
));
ForkRegular.displayName = "ForkRegular";
var Fork_default = ForkRegular;
