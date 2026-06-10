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
var Router_exports = {};
__export(Router_exports, {
  default: () => Router_default
});
module.exports = __toCommonJS(Router_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 400C87.164 400 80 407.164 80 416S87.164 432 96 432S112 424.836 112 416S104.836 400 96 400ZM192 400C183.164 400 176 407.164 176 416S183.164 432 192 432S208 424.836 208 416S200.836 400 192 400ZM512 320H360V224C360 219.594 356.406 216 352 216S344 219.594 344 224V320H64C28.654 320 0 348.654 0 384V448C0 483.346 28.654 512 64 512H512C547.348 512 576 483.346 576 448V384C576 348.654 547.348 320 512 320ZM560 448C560 474.467 538.467 496 512 496H64C37.533 496 16 474.467 16 448V384C16 357.533 37.533 336 64 336H512C538.467 336 560 357.533 560 384V448ZM154.031 101.5C205.969 46.344 276.25 16 352 16S498.031 46.344 549.969 101.5C551.531 103.156 553.656 104 555.781 104C557.75 104 559.719 103.281 561.281 101.812C564.469 98.781 564.625 93.719 561.594 90.5C507.438 33 431.031 0 352 0S196.562 33 142.406 90.5C139.375 93.719 139.531 98.781 142.719 101.812C145.969 104.844 151.031 104.688 154.031 101.5ZM352 112C300.312 112 251.438 134.594 217.906 174C215.031 177.375 215.438 182.406 218.812 185.281C222.156 188.156 227.219 187.75 230.094 184.375C260.562 148.531 305 128 352 128S443.438 148.531 473.906 184.375C475.5 186.219 477.75 187.188 480 187.188C481.844 187.188 483.688 186.563 485.188 185.281C488.563 182.406 488.969 177.375 486.094 174C452.562 134.594 403.688 112 352 112Z" })
  }
));
RouterThin.displayName = "RouterThin";
var Router_default = RouterThin;
